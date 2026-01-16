import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AlertCircle, BookOpen, ArrowRight, FileText, ArrowLeft } from "lucide-react";

export const SkillGapAnalysis = () => {
  const [analyzing, setAnalyzing] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start analysis automatically on mount
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          setShowResult(true);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const AnalysisResult = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Overall Score */}
        <Card className="md:col-span-1 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle>Match Score</CardTitle>
            <CardDescription>Based on your resume</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-6">
            <div className="relative flex items-center justify-center">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted/20"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={377}
                  strokeDashoffset={377 - (377 * 65) / 100}
                  className="text-primary transition-all duration-1000 ease-out"
                />
              </svg>
              <span className="absolute text-3xl font-bold">65%</span>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              You're a good match for <span className="font-semibold text-foreground">Senior Full Stack Developer</span> roles, but there's room for improvement.
            </p>
          </CardContent>
        </Card>

        {/* Missing Skills */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Missing Skills Detected</CardTitle>
            <CardDescription>Critical skills absent from your resume that are in high demand.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Next.js 14", category: "Framework", importance: "High" },
                { name: "GraphQL", category: "API", importance: "Medium" },
                { name: "System Design", category: "Architecture", importance: "High" },
                { name: "Docker", category: "DevOps", importance: "Medium" },
              ].map((skill, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-red-500/10 text-red-500">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">{skill.category}</p>
                    </div>
                  </div>
                  <Badge variant={skill.importance === "High" ? "destructive" : "secondary"}>
                    {skill.importance} Importance
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommended Actions */}
      <h3 className="text-xl font-bold mt-8 mb-4">Recommended Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer group">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-primary" />
              Advanced Next.js Course
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Master Server Components, App Router, and tailored performance optimizations.</p>
            <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
              Start Learning <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer group">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-primary" />
              System Design Interview Prep
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Learn to design scalable systems. Covers load balancing, caching, and database sharding.</p>
             <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
              Start Learning <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto pb-10 space-y-8">
      <div>
        <Link to="/dashboard">
          <Button variant="ghost" className="mb-4 pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-display font-bold">Skill Gap Analysis</h1>
        <p className="text-muted-foreground">Analyze your resume against industry standards to identify growth areas.</p>
      </div>

      {analyzing && (
        <Card>
          <CardContent className="py-12 flex flex-col items-center justify-center space-y-6">
            <div className="w-full max-w-md space-y-2">
               <div className="flex justify-between text-sm">
                <span>Analyzing resume...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <p className="text-sm text-muted-foreground animate-pulse">
              Identifying key technical skills...
            </p>
          </CardContent>
        </Card>
      )}

      {showResult && <AnalysisResult />}
    </div>
  );
};
