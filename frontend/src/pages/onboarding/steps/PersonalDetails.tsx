import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useOnboarding } from '@/contexts/OnboardingContext';

export const PersonalDetails = () => {
  const { data, updateStepData } = useOnboarding();
  const { personalInfo } = data;

  const handleChange = (field: keyof typeof personalInfo, value: string) => {
    updateStepData('personalInfo', { ...personalInfo, [field]: value });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input 
            id="fullName" 
            value={personalInfo.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email"
            value={personalInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel"
            value={personalInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Professional Bio</Label>
        <Textarea 
          id="bio" 
          value={personalInfo.bio || ''}
          onChange={(e) => handleChange('bio', e.target.value)}
          placeholder="Tell us a bit about yourself..."
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="font-semibold text-lg">Online Presence</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn URL</Label>
            <Input 
              id="linkedin" 
              value={personalInfo.linkedin || ''}
              onChange={(e) => handleChange('linkedin', e.target.value)}
              placeholder="linkedin.com/in/..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="github">GitHub URL</Label>
            <Input 
              id="github" 
              value={personalInfo.github || ''}
              onChange={(e) => handleChange('github', e.target.value)}
              placeholder="github.com/..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio URL</Label>
            <Input 
              id="portfolio" 
              value={personalInfo.portfolio || ''}
              onChange={(e) => handleChange('portfolio', e.target.value)}
              placeholder="yourwebsite.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
