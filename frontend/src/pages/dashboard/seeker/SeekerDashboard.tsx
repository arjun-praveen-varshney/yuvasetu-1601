import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/dashboard/JobCard";
import { JobFiltersWidget } from "@/components/dashboard/JobFiltersWidget";
import { JobCardSkeleton } from "@/components/dashboard/JobCardSkeleton";
import { useState, useEffect } from "react";

const MOCK_JOBS = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png",
    location: "Bangalore, India (Hybrid)",
    salary: "₹25L - ₹40L",
    type: "Full-time",
    postedAt: "2 days ago",
    matchScore: 92,
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    description: "We are seeking a Senior Frontend Developer to lead our frontend team. You will be responsible for architecting and building scalable web applications used by millions of users. The ideal candidate has a deep understanding of React internals, performance optimization, and modern frontend tooling.",
    requirements: [
       "5+ years of experience with React and modern JavaScript/TypeScript",
       "Deep understanding of web performance metrics (Core Web Vitals)",
       "Experience with state management (Redux, Zustand, or Context)",
       "Familiarity with SSR frameworks like Next.js",
       "Experience with testing frameworks (Jest, React Testing Library)"
    ],
    benefits: ["Competitive Equity", "Annual Learning Budget", "Health & Wellness Allowance", "Remote-first culture"]
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignStudio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    location: "Remote",
    salary: "₹18L - ₹28L",
    type: "Full-time",
    postedAt: "5 hours ago",
    matchScore: 85,
    skills: ["Figma", "UI/UX", "Prototyping"],
    description: "Join our award-winning design team to craft beautiful and intuitive user experiences. You will work across the entire product lifecycle, from user research and wireframing to high-fidelity prototyping and design systems.",
    requirements: [
       "Strong portfolio demonstrating UI/UX skills",
       "Proficiency in Figma and prototyping tools",
       "Experience with design systems",
       "Understanding of user-centered design principles",
       "Ability to collaborate effective directly with engineers"
    ],
    benefits: ["Unlimited PTO", "Home Office Setup Budget", "Annual Design Conference Trip", "Premium Health Insurance"]
  },
  {
    id: "3",
    title: "Full Stack Engineer",
    company: "StartupX",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    location: "Mumbai, India",
    salary: "₹20L - ₹35L",
    type: "Full-time",
    postedAt: "1 day ago",
    matchScore: 78,
    skills: ["React", "Python", "Django", "PostgreSQL"],
    description: "We are looking for a versatile Full Stack Engineer to build end-to-end features for our fintech platform. You will work on both the React frontend and Python/Django backend.",
    requirements: [
       "3+ years of full-stack development experience",
       "Proficiency in Python and Django/FastAPI",
       "Strong frontend skills with React",
       "Experience with relational databases (PostgreSQL)",
       "Knowledge of AWS infrastructure is a plus"
    ],
    benefits: ["Early Employee Stock Options", "Free Lunch & Snacks", "Gym Membership", "Flexible Hours"]
  },
  {
    id: "4",
    title: "React Native Developer",
    company: "MobileFirst",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    location: "Pune, India",
    salary: "₹15L - ₹25L",
    type: "Contract",
    postedAt: "3 days ago",
    matchScore: 65,
    skills: ["React Native", "Redux", "iOS", "Android"],
    description: "We need a skilled React Native developer to help us build a cross-platform mobile app for the healthcare industry. You will be responsible for developing smooth, native-like experiences.",
    requirements: [
       "Proven experience building React Native apps",
       "Understanding of native iOS/Android modules",
       "Experience with offline storage and state management",
       "Familiarity with publishing to App Store and Play Store",
       "Knowledge of mobile CI/CD pipelines"
    ],
    benefits: ["Project Completion Bonus", "Flexible Contract Terms", "Remote Work", "Potential for Full-time conversion"]
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudSystems",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    location: "Hyderabad, India",
    salary: "₹22L - ₹38L",
    type: "Full-time",
    postedAt: "4 hours ago",
    matchScore: 88,
    skills: ["AWS", "Kubernetes", "Docker", "Terraform"],
    description: "Looking for an experienced DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines. You will work closely with development teams to ensure high availability and scalability.",
    requirements: [
       "Strong experience with AWS services (EC2, EKS, RDS)",
       "Proficiency in containerization (Docker, Kubernetes)",
       "Experience with IaC tools (Terraform, Ansible)",
       "Knowledge of monitoring tools (Prometheus, Grafana)",
       "Scripting skills in Python or Bash"
    ],
    benefits: ["Remote Friendly", "Certification Budget", "Health Insurance", "MacBook Pro"]
  },
];

export const SeekerDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Welcome & Stats Section */}
      <div className="flex flex-col xl:flex-row justify-between items-end gap-6">
        <div className="w-full xl:w-auto">
          <h1 className="font-display text-3xl font-bold mb-2">
            Welcome back, <span className="text-primary">User</span>!
          </h1>
          <p className="text-muted-foreground">
            how's everthing going ?
          </p>
        </div>
        
        {/* Application Status Widget (Moved to Top) */}
        <div className="w-full xl:w-auto bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-4 flex flex-wrap gap-4 items-center justify-between xl:justify-end">
           <h3 className="font-bold text-sm text-muted-foreground mr-2 hidden xl:block">Application Status:</h3>
           <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-background/50 px-3 py-2 rounded-xl">
                 <div className="text-2xl font-display font-bold text-foreground">12</div>
                 <div className="text-[10px] text-muted-foreground uppercase font-semibold">Applied</div>
              </div>
              <div className="flex items-center gap-2 bg-background/50 px-3 py-2 rounded-xl">
                 <div className="text-2xl font-display font-bold text-primary">4</div>
                 <div className="text-[10px] text-muted-foreground uppercase font-semibold">Shortlisted</div>
              </div>
              <div className="flex items-center gap-2 bg-background/50 px-3 py-2 rounded-xl">
                 <div className="text-2xl font-display font-bold text-accent">2</div>
                 <div className="text-[10px] text-muted-foreground uppercase font-semibold">Interviews</div>
              </div>
               <div className="flex items-center gap-2 bg-background/50 px-3 py-2 rounded-xl">
                 <div className="text-2xl font-display font-bold text-red-500">1</div>
                 <div className="text-[10px] text-muted-foreground uppercase font-semibold">Rejected</div>
              </div>
           </div>
        </div>
      </div>


      {/* AI Recommendation Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-8 shadow-sm mb-8">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
        
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-primary/20 shadow-sm">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">AI-Recommended Jobs</h3>
            <p className="text-muted-foreground">
              Our AI has analyzed your profile and found <span className="font-bold text-primary">5 new positions</span> that match your skills perfectly!
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">Recommended Jobs</h2>
          </div>

          <div className="grid gap-4">
            {MOCK_JOBS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* Sidebar Widgets - Sticky */}
        <div className="space-y-8 sticky top-24">
          {/* Job Filters Widget */}
          <JobFiltersWidget />
          
          {/* Application Status Widget moved to top */}
        </div>
      </div>
    </div>
  );
};
