import { ArrowLeft, MapPin, Banknote, Clock, Users, Mail, FileText, MoreHorizontal, Check, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate, useParams } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Mock job data
const JOB_DATA = {
  1: {
    title: 'Senior Frontend Engineer',
    location: 'Bangalore, India (Hybrid)',
    salary: '₹25L - ₹40L',
    type: 'Full-time',
    posted: '2 days ago',
    status: 'Active',
    description: 'We are seeking a Senior Frontend Developer to lead our frontend team...',
    requirements: ['5+ years React experience', 'TypeScript proficiency', 'Team leadership skills'],
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
  }
};

const MOCK_CANDIDATES = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Senior Frontend Engineer',
    match: 95,
    status: 'New',
    experience: '4 years',
    applied: '2 days ago',
    avatar: 'RS'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Product Designer',
    match: 88,
    status: 'Screening',
    experience: '3 years',
    applied: '1 day ago',
    avatar: 'PP'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Senior Frontend Engineer',
    match: 92,
    status: 'Interview',
    experience: '5 years',
    applied: '3 days ago',
    avatar: 'AK'
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    role: 'Backend Developer',
    match: 78,
    status: 'Rejected',
    experience: '2 years',
    applied: '1 week ago',
    avatar: 'SG'
  },
];

export const JobPostingDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const job = JOB_DATA[1]; // Using mock data
  
  const [candidates, setCandidates] = useState(MOCK_CANDIDATES);

  const handleStatusChange = (candidateId: number, newStatus: string) => {
    setCandidates(prev => prev.map(c => 
      c.id === candidateId ? { ...c, status: newStatus } : c
    ));
    toast({
      title: "Status Updated",
      description: `Candidate status changed to ${newStatus}`,
    });
  };

  const handleReject = (candidateId: number, candidateName: string) => {
    handleStatusChange(candidateId, 'Rejected');
    toast({
      title: "Candidate Rejected",
      description: `${candidateName} has been moved to rejected`,
      variant: "destructive",
    });
  };

  const handleScheduleInterview = (candidateId: number, candidateName: string) => {
    handleStatusChange(candidateId, 'Interview');
    toast({
      title: "Interview Scheduled",
      description: `Interview scheduled for ${candidateName}`,
    });
  };

  const handleAccept = (candidateId: number, candidateName: string) => {
    handleStatusChange(candidateId, 'Accepted');
    toast({
      title: "Candidate Accepted",
      description: `${candidateName} has been accepted`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Back Button */}
      <Button variant="ghost" className="gap-2" onClick={() => navigate('/dashboard/employer/postings')}>
        <ArrowLeft className="w-4 h-4" />
        Back to My Postings
      </Button>

      {/* Job Details Card */}
      <div className="bg-card border border-border rounded-3xl p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="font-display text-3xl font-bold mb-2">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Banknote className="w-4 h-4" /> {job.salary}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> Posted {job.posted}
              </span>
            </div>
          </div>
          <Badge className="bg-green-500/10 text-green-600 border-green-500/20">{job.status}</Badge>
        </div>

        <Separator className="my-6" />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Job Description</h3>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Applicants Section */}
      <div className="bg-card border border-border rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl">Applicants ({candidates.length})</h2>
            <p className="text-sm text-muted-foreground">Review and manage candidates</p>
          </div>
          <Button variant="outline">Export List</Button>
        </div>

        {/* Candidates Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="p-4 font-semibold text-muted-foreground text-sm pl-6">Candidate</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Match</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Status</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="hover:bg-muted/30 transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                        {candidate.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{candidate.name}</div>
                        <div className="text-sm text-muted-foreground">{candidate.experience} Exp • {candidate.applied}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20">
                      {candidate.match}% Match
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Select 
                      value={candidate.status} 
                      onValueChange={(value) => handleStatusChange(candidate.id, value)}
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Screening">Screening</SelectItem>
                        <SelectItem value="Interview">Interview</SelectItem>
                        <SelectItem value="Accepted">Accepted</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                        onClick={() => handleAccept(candidate.id, candidate.name)}
                        title="Accept Candidate"
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Accept
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        onClick={() => handleScheduleInterview(candidate.id, candidate.name)}
                        title="Schedule Interview"
                      >
                        <Calendar className="w-4 h-4 mr-1" />
                        Interview
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleReject(candidate.id, candidate.name)}
                        title="Reject Candidate"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                      <Button variant="ghost" size="icon" title="View Resume">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Contact">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
