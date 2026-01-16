
import { Search, MapPin, Banknote, Briefcase, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

export const JobFiltersWidget = () => {
    return (
        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Filter className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="font-bold text-lg">Filter Jobs</h3>
                   <p className="text-sm text-muted-foreground">Refine your recommendations</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                        <Search className="w-4 h-4" /> Role or Keyword
                    </label>
                    <Input placeholder="e.g. Frontend Developer" className="bg-background" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" /> Location
                    </label>
                    <Input placeholder="e.g. Bangalore, Remote" className="bg-background" />
                </div>

                <div className="space-y-2">
                     <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4" /> Job Type
                    </label>
                    <Select>
                        <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">Any</SelectItem>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="freelance">Freelance</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center text-sm">
                        <label className="font-medium flex items-center gap-2 text-muted-foreground">
                             <Banknote className="w-4 h-4" /> Salary Range
                        </label>
                        <span className="text-xs font-semibold text-primary">₹5L - ₹50L+</span>
                    </div>
                    <Slider defaultValue={[20]} max={100} step={1} className="py-2" />
                </div>
            </div>

            <Button className="w-full gap-2 font-bold shadow-button" size="lg">
                Apply Filters
            </Button>
        </div>
    );
};
