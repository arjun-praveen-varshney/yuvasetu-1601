import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ResumeUpload = () => {
  const navigate = useNavigate();

  const handleManualEntry = () => {
    navigate('/onboarding/form');
  };

  const handleBack = () => {
    navigate('/onboarding');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-display text-4xl font-bold">Fill Your Resume</h1>
        <p className="text-muted-foreground text-lg">
          Please fill in your professional details. <br />
          You can edit everything before submission.
        </p>
      </div>

      {/* Manual Entry Option */}
      <div
        className="relative border-2 border-dashed rounded-3xl p-12 transition-all duration-300 text-center cursor-pointer border-primary/50 bg-card hover:bg-card/80 hover:border-primary"
        onClick={handleManualEntry}
      >
        <div className="space-y-6">
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">Fill Your Profile Manually</h3>
            <p className="text-muted-foreground">Enter your education, experience, skills and other details in a simple form</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-4">
        <Button variant="ghost" onClick={handleBack}>
          Back
        </Button>

        <Button
          variant="seeker"
          size="lg"
          onClick={handleManualEntry}
          className="min-w-[200px]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

                Processing...
              </>
            ) : (
              'Continue to Review'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
