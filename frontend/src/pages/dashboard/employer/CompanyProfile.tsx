import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Globe, MapPin, Building2 } from 'lucide-react';

export const CompanyProfile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
       <div>
        <h1 className="font-display text-3xl font-bold mb-2">Company Profile</h1>
        <p className="text-muted-foreground">Update your company details and branding.</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-8">
        
        {/* Logo Section */}
        <div className="flex items-center gap-6 pb-6 border-b border-border">
          <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
            <Building2 className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Company Logo</h3>
            <p className="text-sm text-muted-foreground mb-4">Recommended size 400x400px</p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="w-3 h-3" /> Upload Logo
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Remove</Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Company Name</Label>
            <Input id="name" defaultValue="TechCorp Solutions" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website URL</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="website" className="pl-9" defaultValue="https://techcorp.com" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tagline">Tagline</Label>
          <Input id="tagline" defaultValue="Innovating the Future of Tech" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">About Company</Label>
          <Textarea 
            id="description" 
            className="min-h-[120px]"
            defaultValue="TechCorp is a leading technology solutions provider specializing in AI and Cloud computing..." 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Input id="industry" defaultValue="Information Technology" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">Company Size</Label>
            <Input id="size" defaultValue="50-200 Employees" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Headquarters</Label>
          <div className="relative">
             <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
             <Input id="location" className="pl-9" defaultValue="Bangalore, Karnataka, India" />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button variant="employer" size="lg">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};
