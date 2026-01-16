import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';

export const PostJob = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Post a New Job</h1>
        <p className="text-muted-foreground">Find the perfect candidate for your team.</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-8">
        <div className="space-y-4">
          <h2 className="font-bold text-xl border-b border-border pb-2">Job Details</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input id="title" placeholder="e.g. Senior Frontend Engineer" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Employment Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g. Bangalore / Remote" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="salary">Salary Range</Label>
              <Input id="salary" placeholder="e.g. ₹15L - ₹25L" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-bold text-xl border-b border-border pb-2">Description & Requirements</h2>
          
          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea id="description" placeholder="Describe the role responsibilities..." className="min-h-[150px]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Key Requirements</Label>
            <Textarea id="requirements" placeholder="List the required skills and experience..." className="min-h-[150px]" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-bold text-xl border-b border-border pb-2">Skills</h2>
          <div className="space-y-2">
            <Label>Required Skills (Comma separated)</Label>
            <Input placeholder="React, TypeScript, Node.js" />
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-4">
          <Button variant="outline" size="lg">Save Draft</Button>
          <Button variant="employer" size="lg" className="gap-2">
            <Plus className="w-4 h-4" />
            Publish Job
          </Button>
        </div>
      </div>
    </div>
  );
};
