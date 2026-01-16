import { Search, Filter, MoreHorizontal, FileText, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CANDIDATES = [
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

export const Candidates = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Candidates</h1>
          <p className="text-muted-foreground">Manage and track applicants across 3 active jobs.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Filters
          </Button>
          <Button variant="employer">Export List</Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex gap-4 bg-muted/20">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search candidates..." className="pl-9 bg-background" />
          </div>
          <Select defaultValue="all">
             <SelectTrigger className="w-[180px] bg-background">
               <SelectValue placeholder="Filter by Job" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="all">All Jobs</SelectItem>
               <SelectItem value="frontend">Senior Frontend</SelectItem>
               <SelectItem value="product">Product Designer</SelectItem>
             </SelectContent>
          </Select>
          <Select defaultValue="newest">
             <SelectTrigger className="w-[180px] bg-background">
               <SelectValue placeholder="Sort by" />
             </SelectTrigger>
             <SelectContent>
               <SelectItem value="newest">Newest First</SelectItem>
               <SelectItem value="match">Match Score</SelectItem>
             </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="p-4 font-semibold text-muted-foreground text-sm pl-6">Candidate</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Applied For</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Match</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Stage</th>
                <th className="p-4 font-semibold text-muted-foreground text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {CANDIDATES.map((candidate) => (
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
                  <td className="p-4 text-sm font-medium">{candidate.role}</td>
                  <td className="p-4">
                    <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20">
                      {candidate.match}% Match
                    </Badge>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      candidate.status === 'New' ? 'bg-blue-500/10 text-blue-600' :
                      candidate.status === 'Interview' ? 'bg-orange-500/10 text-orange-600' :
                      candidate.status === 'Rejected' ? 'bg-red-500/10 text-red-600' :
                      'bg-green-500/10 text-green-600'
                    }`}>
                      {candidate.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" title="View Resume">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Contact">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
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
