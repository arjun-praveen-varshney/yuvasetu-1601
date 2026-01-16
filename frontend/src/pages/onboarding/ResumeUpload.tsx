import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { toast } from 'sonner';

export const ResumeUpload = () => {
  const navigate = useNavigate();
  const { simulateResumeParsing, isParsing } = useOnboarding();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      toast.error('Invalid file type. Please upload a PDF or DOCX.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error('File too large. Max size is 5MB.');
      return;
    }
    setFile(file);
  };

  const handleUpload = async () => {
    if (!file) return;
    
    try {
      await simulateResumeParsing(file);
      toast.success('Resume parsed successfully!');
      navigate('/onboarding/form');
    } catch (error) {
      toast.error('Failed to parse resume. Please try manual entry.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-display text-4xl font-bold">Upload Your Resume</h1>
        <p className="text-muted-foreground text-lg">
          We'll analyze your resume to auto-fill your profile details. <br/>
          You can review and edit everything in the next step.
        </p>
      </div>

      {/* Upload Zone */}
      <div
        className={`relative border-2 border-dashed rounded-3xl p-12 transition-all duration-300 text-center cursor-pointer ${
          isDragging 
            ? 'border-primary bg-primary/5 scale-[1.02]' 
            : file 
              ? 'border-primary/50 bg-card' 
              : 'border-border bg-card/50 hover:bg-card hover:border-primary/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !isParsing && fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.docx"
          onChange={handleFileChange}
          disabled={isParsing}
        />

        {isParsing ? (
          <div className="space-y-6">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary animate-pulse" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">Analyzing Resume...</h3>
              <p className="text-muted-foreground animate-pulse">Extracting skills and experience...</p>
            </div>
          </div>
        ) : file ? (
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-primary mb-1">{file.name}</h3>
              <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); setFile(null); }}>
              Change File
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
              <Upload className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl">Click to upload or drag and drop</h3>
              <p className="text-muted-foreground">PDF or DOCX (max. 5MB)</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button variant="ghost" onClick={() => navigate('/onboarding')} disabled={isParsing}>
          Back
        </Button>
        <Button 
          variant="seeker" 
          size="lg" 
          onClick={handleUpload} 
          disabled={!file || isParsing}
          className="min-w-[200px]"
        >
          {isParsing ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            'Continue'
          )}
        </Button>
      </div>
    </div>
  );
};
