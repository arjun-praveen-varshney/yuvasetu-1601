import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check, User, GraduationCap, Briefcase, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PersonalDetails } from './steps/PersonalDetails';
import { Education } from './steps/Education';
import { Experience } from './steps/Experience';
import { Skills } from './steps/Skills';
import { useOnboarding } from '@/contexts/OnboardingContext';
import './ProgressBarEnhancements.css';

const STEPS = [
  { id: 1, title: 'Personal Details', component: PersonalDetails, icon: User },
  { id: 2, title: 'Education', component: Education, icon: GraduationCap },
  { id: 3, title: 'Experience', component: Experience, icon: Briefcase },
  { id: 4, title: 'Skills', component: Skills, icon: Cpu },
];

export const MultiStepForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const { data } = useOnboarding();

  const CurrentComponent = STEPS.find(s => s.id === currentStep)?.component || PersonalDetails;
  const isLastStep = currentStep === STEPS.length;

  const handleNext = () => {
    if (isLastStep) {
      // Handle Submission
      console.log('Final Data:', data);
      
      // Redirect to dashboard immediately
      navigate('/dashboard');
    } else {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    } else {
      navigate('/onboarding');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Enhanced Progress Bar */}
      <div className="enhanced-progress-container mb-10 md:mb-14 px-4">
        <div className="relative">
          {/* Progress percentage indicator */}
          <div className="progress-percentage">
            {Math.round(((currentStep - 1) / (STEPS.length - 1)) * 100)}% Complete
          </div>
          
          {/* Progress Track Background with subtle animation */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-2 bg-muted/50 rounded-full overflow-hidden">
             <div className="w-full h-full bg-gradient-to-r from-transparent via-muted to-transparent opacity-30"></div>
          </div>
          
          {/* Enhanced Active Progress Fill with Animated Gradient */}
          <div 
            className="progress-bar-enhanced progress-line-gradient glow-effect absolute left-0 top-1/2 -translate-y-1/2 h-2 rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
          />

          <div className="flex justify-between relative z-10">
            {STEPS.map((step, index) => {
              const isCompleted = step.id < currentStep;
              const isCurrent = step.id === currentStep;
              const justCompleted = step.id === currentStep - 1;

              return (
                <div key={step.id} className="flex flex-col items-center gap-3 group cursor-default step-hover-effect">
                  <div 
                    className={`
                      step-circle-enhanced
                      w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 relative overflow-visible
                      ${isCompleted 
                        ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30 step-complete-animation' 
                        : isCurrent 
                          ? 'border-primary bg-background text-primary scale-110 shadow-[0_0_20px_rgba(var(--primary),0.4)] ring-4 ring-primary/10' 
                          : 'border-muted/60 bg-background text-muted-foreground scale-100'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6 md:w-7 md:h-7" />
                    ) : (
                      <step.icon className={`w-6 h-6 md:w-6 md:h-6 transition-transform duration-300 ${isCurrent ? 'scale-110' : ''}`} />
                    )}
                    
                    {/* Floating particles around current step */}
                    {isCurrent && (
                      <div className="step-particles">
                        <div className="step-particle"></div>
                        <div className="step-particle"></div>
                        <div className="step-particle"></div>
                        <div className="step-particle"></div>
                        <div className="step-particle"></div>
                      </div>
                    )}
                    
                    {/* Ripple effect for just completed step */}
                    {justCompleted && (
                      <div className="step-ripple"></div>
                    )}
                    
                    {/* Celebration emoji for completed steps */}
                    {isCompleted && currentStep === step.id + 1 && (
                      <div className="milestone-celebration">
                        {step.id === 1 && '✨'}
                        {step.id === 2 && '🎓'}
                        {step.id === 3 && '💼'}
                      </div>
                    )}
                    
                    {/* Enhanced pulse for current step */}
                    {isCurrent && (
                      <>
                        <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></span>
                        <span className="absolute -inset-1 rounded-full border border-primary/30 animate-pulse"></span>
                      </>
                    )}
                  </div>
                  
                  <div className={`flex flex-col items-center transition-all duration-300 ${isCurrent ? 'translate-y-0' : 'translate-y-1'}`}>
                    <span 
                      className={`text-xs md:text-sm font-bold tracking-wide transition-colors duration-300 whitespace-nowrap ${
                      isCurrent ? 'text-primary' : isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </span>
                    <span className={`text-[10px] font-medium uppercase tracking-wider transition-opacity duration-300 ${isCurrent ? 'opacity-100 text-muted-foreground mt-0.5' : 'opacity-0 h-0 hidden'}`}>
                      Step {step.id} of {STEPS.length}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-card rounded-2xl md:rounded-3xl border border-border shadow-card p-6 md:p-10 min-h-[400px]">
        <div className="mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            {STEPS.find(s => s.id === currentStep)?.title}
          </h2>
          <p className="text-muted-foreground">
            Step {currentStep} of {STEPS.length}
          </p>
        </div>

        <CurrentComponent />

        <div className="flex justify-between mt-10 pt-6 border-t border-border">
          <Button variant="outline" onClick={handleBack} size="lg">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button variant="seeker" onClick={handleNext} size="lg">
            {isLastStep ? 'Complete Profile' : 'Next Step'}
            {!isLastStep && <ChevronRight className="w-4 h-4 ml-2" />}
          </Button>
        </div>
        </div>
    </div>
  );
};
