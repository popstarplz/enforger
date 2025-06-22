
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, EyeOff, FileText } from 'lucide-react';

interface DocumentPreviewProps {
  documentType: string;
  previewImage: string;
  onOrderClick: () => void;
}

const DocumentPreview = ({ documentType, previewImage, onOrderClick }: DocumentPreviewProps) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="space-y-4">
      <Button
        onClick={() => setShowPreview(!showPreview)}
        variant="outline"
        className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400"
      >
        {showPreview ? (
          <>
            <EyeOff className="w-4 h-4 mr-2" />
            Hide Preview
          </>
        ) : (
          <>
            <Eye className="w-4 h-4 mr-2" />
            Show Preview
          </>
        )}
      </Button>

      {showPreview && (
        <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/20 overflow-hidden">
          <CardContent className="p-0 relative">
            <div className="relative">
              <img
                src={previewImage}
                alt={`${documentType} preview`}
                className="w-full h-auto object-contain max-h-96"
              />
              
              {/* Watermark Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-green-500/80 transform rotate-12 select-none">
                    SAMPLE
                  </div>
                  <div className="text-2xl font-bold text-red-500/80 transform -rotate-12 select-none">
                    WATERMARK
                  </div>
                  <div className="text-lg text-green-400/60 select-none">
                    ENFORGER.COM
                  </div>
                </div>
              </div>
              
              {/* Diagonal watermark lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-green-500/30 text-sm font-bold transform rotate-45 select-none"
                      style={{
                        top: `${i * 12.5}%`,
                        left: '-10%',
                        width: '120%',
                      }}
                    >
                      ENFORGER SAMPLE • ENFORGER SAMPLE • ENFORGER SAMPLE • ENFORGER SAMPLE •
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-green-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-green-500" />
                  <span className="text-green-400 text-sm">Sample Preview</span>
                </div>
                <Button
                  onClick={onOrderClick}
                  size="sm"
                  className="bg-green-500 text-black hover:bg-green-400 font-bold"
                >
                  Order This Document
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DocumentPreview;
