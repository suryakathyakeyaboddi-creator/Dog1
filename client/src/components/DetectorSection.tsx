import { useState, useRef, ChangeEvent } from 'react';
import { Client } from '@gradio/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Loader2 } from 'lucide-react';

interface BreedResult {
  'Predicted Breed': string;
  'Decision Score': number;
}

export default function DetectorSection() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<BreedResult | null>(null);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
      setError('');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleIdentifyBreed = async () => {
    if (!imageFile) {
      setError('Please upload an image first!');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      const client = await Client.connect('SuryaKathyakeyaBoddi/dog-breed-ai');
      const response = await client.predict('/predict', {
        image: imageFile,
      });

      console.log('API Result:', response.data);

      const results = response.data as BreedResult[];
      const topResult = results[0];
      setResult(topResult);
    } catch (err) {
      console.error('API Call Failed:', err);
      setError('Could not identify breed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="home" className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Curious About Your Dog's Breed?
          </h1>
          <p className="text-lg text-muted-foreground">
            Just upload a photo and let our AI work its magic!
          </p>
        </div>

        <Card className="p-8">
          <div
            onClick={handleUploadClick}
            className="border-2 border-dashed border-border rounded-md p-8 cursor-pointer transition-all hover-elevate hover:border-primary mb-6 flex flex-col items-center justify-center min-h-[200px]"
            data-testid="upload-area"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
              data-testid="input-file"
            />

            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full max-h-[250px] rounded-md"
                data-testid="img-preview"
              />
            ) : (
              <>
                <Upload className="w-12 h-12 text-muted-foreground mb-3" />
                <p className="text-base text-foreground mb-1" data-testid="text-upload-prompt">
                  Click to upload or drag and drop
                </p>
                <span className="text-sm text-muted-foreground" data-testid="text-file-types">
                  PNG, JPG, or WEBP
                </span>
              </>
            )}
          </div>

          <Button
            onClick={handleIdentifyBreed}
            disabled={!imageFile || isLoading}
            className="w-full h-12 text-lg font-semibold rounded-full"
            data-testid="button-identify"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Identify Breed'
            )}
          </Button>

          {isLoading && (
            <div className="mt-6 text-center" data-testid="loading-status">
              <div className="inline-block w-10 h-10 border-4 border-muted border-t-primary rounded-full animate-spin mb-3"></div>
              <p className="text-muted-foreground">Analyzing... please wait.</p>
            </div>
          )}

          {result && (
            <div className="mt-6 text-center" data-testid="results-container">
              <h2 className="text-xl text-foreground mb-1" data-testid="text-confidence">
                Based on my analysis, I believe that's a...
              </h2>
              <h3 className="text-3xl font-bold text-primary" data-testid="text-breed">
                {result['Predicted Breed']}
              </h3>
              <p className="text-sm text-muted-foreground mt-2" data-testid="text-score">
                (Decision Score: {result['Decision Score'].toFixed(2)})
              </p>
            </div>
          )}

          {error && (
            <div className="mt-6 text-center" data-testid="error-message">
              <p className="text-destructive">{error}</p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
