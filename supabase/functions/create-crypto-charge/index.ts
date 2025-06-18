
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    // Get the authorization header from the request
    const authHeader = req.headers.get('Authorization')!
    const token = authHeader.replace('Bearer ', '')

    // Get the user from the auth token
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token)
    if (authError || !user) {
      throw new Error('Unauthorized')
    }

    const { amount, crypto_currency } = await req.json()

    // Validate input
    if (!amount || amount < 10 || !crypto_currency) {
      throw new Error('Invalid amount or cryptocurrency')
    }

    // In a real implementation, you would use Coinbase Commerce API here
    // For now, we'll create a mock charge and return a payment address
    const mockAddresses = {
      BTC: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      LTC: 'LQTpS1gFKq4VGvs4d9GtBxLJN6GjMQCYa7',
      USDT: '0x742d35Cc6669B432c46C9e8B4D0f0f4F0D8F4A8C'
    }

    const paymentAddress = mockAddresses[crypto_currency as keyof typeof mockAddresses]
    const chargeId = `charge_${Date.now()}_${Math.random().toString(36).substring(7)}`

    // Create transaction record
    const { data: transaction, error: dbError } = await supabaseClient
      .from('topup_transactions')
      .insert({
        user_id: user.id,
        amount: amount,
        crypto_currency: crypto_currency,
        coinbase_charge_id: chargeId,
        payment_address: paymentAddress,
        status: 'pending'
      })
      .select()
      .single()

    if (dbError) {
      throw dbError
    }

    return new Response(
      JSON.stringify({
        success: true,
        charge_id: chargeId,
        payment_address: paymentAddress,
        amount: amount,
        crypto_currency: crypto_currency
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error creating crypto charge:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
