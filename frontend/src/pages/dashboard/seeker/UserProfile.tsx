import { MapPin, Mail, Phone, Linkedin, Github, Download, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const UserProfile = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="relative h-48 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 border border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <Button size="sm" variant="secondary" className="absolute top-4 right-4 gap-2">
          <Edit2 className="w-3 h-3" />
          Edit Cover
        </Button>
      </div>

      {/* Profile Info */}
      <div className="px-4 md:px-8 -mt-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-end md:items-start">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-background p-2 shadow-2xl ring-4 ring-background">
             <div className="w-full h-full rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold border-2 border-primary/20">
               UR
             </div>
          </div>
          <div className="flex-1 space-y-2 py-2">
            <h1 className="text-3xl font-display font-bold">User from Resume</h1>
            <p className="text-lg text-muted-foreground">Full Stack Developer • <MapPin className="inline w-4 h-4 ml-1" /> Bangalore, India</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="w-3.5 h-3.5" /> user@example.com
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-3.5 h-3.5" /> +91 99999 99999
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                 <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                 <Github className="w-3.5 h-3.5" /> GitHub
              </Button>
            </div>
          </div>
          <div className="flex gap-3 pb-2">
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-4 h-4" /> Resume
            </Button>
            <Button variant="seeker" size="lg" className="gap-2">
              <Edit2 className="w-4 h-4" /> Edit Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
           {/* About */}
           <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
             <h2 className="font-bold text-xl">About Me</h2>
             <p className="text-muted-foreground leading-relaxed">
               Passionate Full Stack Developer with 3+ years of experience building scalable web applications. 
               Proficient in the MERN stack and cloud technologies. Experienced in leading small teams and delivering projects on time. 
               Always eager to learn new technologies and improve coding practices.
             </p>
           </section>

           {/* Experience */}
           <section className="bg-card border border-border rounded-2xl p-8 space-y-6">
             <div className="flex justify-between items-center">
               <h2 className="font-bold text-xl">Work Experience</h2>
               <Button variant="ghost" size="sm" className="text-primary"><Plus className="w-4 h-4 mr-1"/> Add</Button>
             </div>
             
             <div className="space-y-8">
               <div className="relative pl-8 border-l-2 border-border/50 space-y-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <h3 className="font-bold text-lg">Senior Frontend Engineer</h3>
                  <div className="text-sm text-primary font-medium">TechCorp Solutions • Jan 2022 - Present</div>
                  <p className="text-muted-foreground text-sm">
                    Led the frontend redesign of the core product using Next.js. Improved performance by 40% and accessibility scores to 98.
                  </p>
               </div>

               <div className="relative pl-8 border-l-2 border-border/50 space-y-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground border-4 border-background" />
                  <h3 className="font-bold text-lg">Software Developer</h3>
                  <div className="text-sm text-primary font-medium">StartupX • Jun 2020 - Dec 2021</div>
                  <p className="text-muted-foreground text-sm">
                    Developed key features for the MVP. Integrated Stripe payment gateway and real-time chat using Socket.io.
                  </p>
               </div>
             </div>
           </section>

           {/* Education */}
           <section className="bg-card border border-border rounded-2xl p-8 space-y-6">
             <h2 className="font-bold text-xl">Education</h2>
             <div className="space-y-6">
               <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">B.Tech in Computer Science</h3>
                    <div className="text-sm text-muted-foreground">IIT Bombay</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-foreground">2020</div>
                    <div className="text-sm text-green-600 font-medium">9.2 CGPA</div>
                  </div>
               </div>
             </div>
           </section>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
           {/* Skills */}
           <section className="bg-card border border-border rounded-2xl p-6 space-y-4">
             <div className="flex justify-between items-center">
               <h2 className="font-bold text-lg">Skills</h2>
               <Edit2 className="w-4 h-4 text-muted-foreground cursor-pointer" />
             </div>
             <div className="flex flex-wrap gap-2">
               {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'GraphQL', 'AWS', 'Docker', 'Figma'].map(skill => (
                 <Badge key={skill} variant="secondary" className="px-3 py-1 font-normal bg-muted/50 hover:bg-muted text-foreground">
                   {skill}
                 </Badge>
               ))}
             </div>
           </section>

           {/* Languages */}
           <section className="bg-card border border-border rounded-2xl p-6 space-y-4">
             <h2 className="font-bold text-lg">Languages</h2>
             <div className="space-y-3">
               <div className="flex justify-between text-sm">
                 <span>English</span>
                 <span className="text-muted-foreground">Native/Bilingual</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span>Hindi</span>
                 <span className="text-muted-foreground">Native/Bilingual</span>
               </div>
                <div className="flex justify-between text-sm">
                 <span>Spanish</span>
                 <span className="text-muted-foreground">Elementary</span>
               </div>
             </div>
           </section>
        </div>
      </div>
    </div>
  );
};
import { Plus } from 'lucide-react';
