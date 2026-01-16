import { createContext, useContext, useState, ReactNode } from 'react';

// Simplified type definition for the onboarding data
export interface OnboardingData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    github?: string;
    linkedin?: string;
    portfolio?: string;
    bio?: string;
  };
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    year: string;
    score: string;
  }>;
  experience: Array<{
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string;
  }>;
  skills: string[];
}

interface OnboardingContextType {
  data: OnboardingData;
  updateData: (newData: Partial<OnboardingData>) => void;
  updateStepData: <K extends keyof OnboardingData>(section: K, data: OnboardingData[K]) => void;
  simulateResumeParsing: (file: File) => Promise<void>;
  isParsing: boolean;
}

const initialData: OnboardingData = {
  personalInfo: { fullName: '', email: '', phone: '' },
  education: [],
  experience: [],
  skills: []
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<OnboardingData>(initialData);
  const [isParsing, setIsParsing] = useState(false);

  const updateData = (newData: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const updateStepData = <K extends keyof OnboardingData>(section: K, sectionData: OnboardingData[K]) => {
    setData(prev => ({ ...prev, [section]: sectionData }));
  };

  const simulateResumeParsing = async (file: File) => {
    setIsParsing(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Mock parsed data
    const mockParsedData: Partial<OnboardingData> = {
      personalInfo: {
        fullName: "User from Resume",
        email: "user@example.com",
        phone: "+91 9876543210",
        bio: "Passionate Full Stack Developer with 3 years of experience building scalable web applications. Proficient in React, Node.js, and TypeScript.",
        github: "github.com/example",
        linkedin: "linkedin.com/in/example"
      },
      skills: ["React", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "AWS"],
      education: [
        {
          id: '1',
          institution: "Indian Institute of Technology, Bombay",
          degree: "B.Tech in Computer Science",
          year: "2023",
          score: "9.2 CGPA"
        }
      ],
      experience: [
        {
          id: '1',
          role: "Frontend Developer Intern",
          company: "Tech Corp Inc.",
          duration: "Jun 2022 - Aug 2022",
          description: "Implemented new dashboard features using React and Redux. Improved page load performance by 40%."
        }
      ]
    };

    updateData(mockParsedData);
    setIsParsing(false);
  };

  return (
    <OnboardingContext.Provider value={{ data, updateData, updateStepData, simulateResumeParsing, isParsing }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
