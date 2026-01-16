
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Banknote, Clock, FileText, Upload, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { Badge } from '@/components/ui/badge';

export const JobApplication = () => {
  const { jobId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const job = location.state?.job;

  const [coverLetter, setCoverLetter] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold mb-2">Job Not Found</h2>
        <p className="text-muted-foreground mb-4">The job details could not be loaded.</p>
        <Button onClick={() => navigate('/dashboard/jobs')}>Back to Jobs</Button>
      </div>
    );
  }

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted Successfully!",
        description: `You have applied for ${job.title} at ${job.company}`,
        variant: "default",
      });
      navigate('/dashboard/applications');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      <Button 
        variant="ghost" 
        className="gap-2 pl-0 hover:bg-transparent hover:text-primary"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Button>

      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-2xl bg-white p-3 shadow-lg border border-border/50 shrink-0">
             <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
          </div>
          <div className="space-y-2">
             <h1 className="font-display font-bold text-3xl">{job.title}</h1>
             <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
               <div className="flex items-center gap-1.5 font-medium text-foreground">
                 <Building2 className="w-4 h-4 text-primary" />
                 {job.company}
               </div>
               <div className="flex items-center gap-1.5">
                 <MapPin className="w-4 h-4" />
                 {job.location}
               </div>
               <div className="flex items-center gap-1.5">
                 <Banknote className="w-4 h-4" />
                 {job.salary}
               </div>
               <div className="flex items-center gap-1.5">
                 <Clock className="w-4 h-4" />
                 Posted {job.postedAt}
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Resume Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Resume
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/30 border border-border rounded-xl p-4 flex items-center justify-between group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100/50 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Shubham_Khilari_Resume.pdf</div>
                    <div className="text-xs text-muted-foreground">Uploaded on Jan 15, 2024</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  Change
                </Button>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                Your resume is ready to be sent.
              </div>
            </CardContent>
          </Card>

          {/* Cover Letter Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Cover Letter (Optional)
              </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-2">
                 <Label htmlFor="cover-letter" className="sr-only">Cover Letter</Label>
                 <Textarea 
                   id="cover-letter" 
                   placeholder="Why are you a good fit for this role? Describe your relevant experience..." 
                   className="min-h-[200px] resize-y"
                   value={coverLetter}
                   onChange={(e) => setCoverLetter(e.target.value)}
                 />
                 <p className="text-xs text-muted-foreground text-right">{coverLetter.length}/2000 characters</p>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
           <Card className="bg-primary/5 border-primary/10 shadow-none">
             <CardContent className="p-6 space-y-4">
               <h3 className="font-bold text-lg">Application Summary</h3>
               <div className="space-y-3 text-sm">
                 <div className="flex justify-between">
                   <span className="text-muted-foreground">Job ID</span>
                   <span className="font-mono">{job.id}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-muted-foreground">Role</span>
                   <span className="font-medium text-right">{job.title}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-muted-foreground">Company</span>
                   <span className="font-medium">{job.company}</span>
                 </div>
               </div>
               <div className="pt-4 border-t border-primary/10">
                 <Button 
                   size="lg" 
                   className="w-full font-bold shadow-lg hover:shadow-primary/25 transition-all"
                   onClick={handleSubmit}
                   disabled={isSubmitting}
                 >
                   {isSubmitting ? (
                     <>
                       <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                       Submitting...
                     </>
                   ) : (
                     'Submit Application'
                   )}
                 </Button>
                 <p className="text-xs text-muted-foreground text-center mt-3">
                   By clicking Submit, you agree to share your profile with {job.company}.
                 </p>
               </div>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle className="text-sm font-medium text-muted-foreground">Your Profile Match</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="space-y-4">
                 <div className="flex items-end justify-between">
                   <span className="text-3xl font-bold">{job.matchScore}%</span>
                   <span className="text-sm text-green-600 font-medium mb-1">High Match</span>
                 </div>
                 <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                   <div 
                     className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" 
                     style={{ width: `${job.matchScore}%` }}
                   />
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {job.skills.slice(0, 4).map((skill: string) => (
                     <Badge key={skill} variant="secondary" className="text-xs">
                       {skill}
                     </Badge>
                   ))}
                 </div>
               </div>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
};
