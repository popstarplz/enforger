
-- Create a table to track user top-up transactions
CREATE TABLE public.topup_transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) NOT NULL DEFAULT 'USD',
    crypto_currency VARCHAR(10) NOT NULL,
    coinbase_charge_id VARCHAR(255),
    payment_address TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.topup_transactions ENABLE ROW LEVEL SECURITY;

-- Create policies for users to manage their own transactions
CREATE POLICY "Users can view their own transactions" 
    ON public.topup_transactions 
    FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own transactions" 
    ON public.topup_transactions 
    FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

-- Create a table to track user account balances
CREATE TABLE public.user_balances (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
    balance DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.user_balances ENABLE ROW LEVEL SECURITY;

-- Create policies for users to view their own balance
CREATE POLICY "Users can view their own balance" 
    ON public.user_balances 
    FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own balance" 
    ON public.user_balances 
    FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

-- Create function to initialize user balance on first transaction
CREATE OR REPLACE FUNCTION public.initialize_user_balance()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_balances (user_id, balance)
    VALUES (NEW.user_id, 0.00)
    ON CONFLICT (user_id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to initialize balance when first transaction is created
CREATE TRIGGER on_first_transaction
    AFTER INSERT ON public.topup_transactions
    FOR EACH ROW
    EXECUTE FUNCTION public.initialize_user_balance();
