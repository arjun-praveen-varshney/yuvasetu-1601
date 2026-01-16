import { Search, Filter, Plus, Eye, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const JOB_POSTINGS = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    status: 'Active',
    applicants: 145,
    posted: '2 days ago',
    location: 'Bangalore',
    type: 'Full-time',
    deadline: '30 days left'
  },
  {
    id: 2,
    title: 'Product Designer',
    status: 'Active',
    applicants: 89,
    posted: '4 days ago',
    location: 'Remote',
    type: 'Full-time',
    deadline: '25 days left'
  },
  {
    id: 3,
    title: 'Backend Developer',
    status: 'Closing Soon',
    applicants: 210,
    posted: '1 week ago',
    location: 'Mumbai',
    type: 'Full-time',
    deadline: '3 days left'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    status: 'Draft',
    applicants: 0,
    posted: 'Not published',
    location: 'Hyderabad',
    type: 'Contract',
    deadline: 'Draft'
  },
];

export const MyPostings = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">My Job Postings</h1>
          <p className="text-muted-foreground">Manage all your job listings and track applicants.</p>
        </div>
        <Button variant="employer" className="gap-2 shadow-button" onClick={() => navigate('/dashboard/employer/post-job')}>
          <Plus className="w-4 h-4" />
          Post New Job
        </Button>
      </div>

      {/* Toolbar */}
      <div className="bg-card border border-border rounded-xl p-4 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search job postings..." className="pl-9 bg-background" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" /> Filters
        </Button>
      </div>

      {/* Job Postings Grid */}
      <div className="grid gap-4">
        {JOB_POSTINGS.map((job) => (
          <div
            key={job.id}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
            onClick={() => navigate(`/dashboard/employer/postings/${job.id}`)}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-xl group-hover:text-accent transition-colors">{job.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    job.status === 'Active' ? 'bg-green-500/10 text-green-600 border border-green-500/20' :
                    job.status === 'Closing Soon' ? 'bg-orange-500/10 text-orange-600 border border-orange-500/20' :
                    'bg-muted text-muted-foreground border border-border'
                  }`}>
                    {job.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>Posted {job.posted}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-2xl font-bold text-accent">{job.applicants}</span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase">Applicants</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/dashboard/employer/postings/${job.id}`);
                  }}
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{job.deadline}</span>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">Close</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
