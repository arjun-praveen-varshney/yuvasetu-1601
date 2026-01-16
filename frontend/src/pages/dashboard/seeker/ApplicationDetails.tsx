
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Calendar, CheckCircle2, XCircle, Timer, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { APPLICATIONS } from '@/data/mockApplications';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Interviewing': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
    case 'Shortlisted': return 'bg-green-500/10 text-green-600 border-green-500/20';
    case 'Rejected': return 'bg-red-500/10 text-red-600 border-red-500/20';
    default: return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Interviewing': return <Calendar className="w-5 h-5 mr-1" />;
    case 'Shortlisted': return <CheckCircle2 className="w-5 h-5 mr-1" />;
    case 'Rejected': return <XCircle className="w-5 h-5 mr-1" />;
    default: return <Timer className="w-5 h-5 mr-1" />;
  }
};

export const ApplicationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const app = APPLICATIONS.find(a => a.id === Number(id));

    if (!app) {
        return <div className="p-8 text-center text-muted-foreground">Application not found</div>;
    }

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-12">
            <Button 
                variant="ghost" 
                className="gap-2 pl-0 hover:bg-transparent hover:text-primary"
                onClick={() => navigate('/dashboard/applications')}
            >
                <ArrowLeft className="w-4 h-4" /> Back to Applications
            </Button>

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex items-start gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-white p-2 shadow-sm border border-border/50 shrink-0">
                             <img src={app.logo} alt={app.company} className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold font-display">{app.role}</h1>
                            <div className="text-lg text-muted-foreground font-medium mb-2">{app.company}</div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4" /> {app.location}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" /> Applied on {app.appliedDate}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="self-start">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border ${getStatusColor(app.status)}`}>
                             {getStatusIcon(app.status)}
                             {app.status}
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="space-y-6">
                    <h2 className="text-xl font-bold">Application Status & Timeline</h2>
                    
                    <div className="relative pl-6 border-l-2 border-muted ml-4 space-y-12">
                        {app.timeline.map((event, index) => (
                          <div key={index} className="relative pl-8">
                                <div className={`absolute -left-[33px] top-1 w-6 h-6 rounded-full border-4 border-background
                                  ${event.status === 'completed' ? 'bg-primary ring-4 ring-primary/10' : 
                                    event.status === 'current' ? 'bg-background border-primary animate-pulse ring-4 ring-primary/10' : 
                                    event.status === 'rejected' ? 'bg-red-500 ring-4 ring-red-500/10' :
                                    'bg-muted'}`} 
                                />
                                
                                <div className="flex flex-col gap-2">
                                  <div className="flex flex-wrap items-center justify-between gap-4">
                                    <span className={`text-lg font-bold ${event.status === 'current' ? 'text-primary' : ''}`}>
                                      {event.step}
                                    </span>
                                    <Badge variant={event.status === 'current' ? 'default' : 'secondary'} className="font-normal">
                                      {event.date}
                                    </Badge>
                                  </div>
                                  
                                  {event.description && (
                                    <div className="bg-muted/30 p-4 rounded-xl border border-border/50 text-muted-foreground text-sm leading-relaxed max-w-2xl">
                                      {event.description}
                                    </div>
                                  )}
                                  
                                  {event.status === 'current' && (
                                     <div className="mt-2 text-sm font-semibold text-primary flex items-center gap-2">
                                       <Timer className="w-4 h-4" /> In Progress - Awaiting update
                                     </div>
                                  )}
                                </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
