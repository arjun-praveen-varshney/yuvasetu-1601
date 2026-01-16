
export const DUMMY_USER = {
    uid: 'dummy-user-123',
    email: 'demo@yuvasetu.com',
    displayName: 'Demo User',
    photoURL: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    role: 'JOB_SEEKER', // or 'EMPLOYER'
    emailVerified: true
};

export const DUMMY_JOB_SEEKER_PROFILE = {
    ...DUMMY_USER,
    role: 'JOB_SEEKER',
    about: 'Passionate frontend developer with 3 years of experience in React and TypeScript.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    experience: [
        {
            company: 'Tech Solutions Inc',
            role: 'Frontend Developer',
            duration: '2021 - Present',
            description: 'Building responsive web applications.'
        }
    ],
    education: [
        {
            institution: 'University of Technology',
            degree: 'B.Tech in Computer Science',
            year: '2021'
        }
    ],
    resume: 'https://example.com/resume.pdf',
    github: 'https://github.com/demouser',
    linkedin: 'https://linkedin.com/in/demouser'
};

export const DUMMY_EMPLOYER_PROFILE = {
    ...DUMMY_USER,
    role: 'EMPLOYER',
    companyName: 'YuvaSetu Tech',
    companyWebsite: 'https://yuvasetu.com',
    companyDescription: 'Connecting talent with opportunity.',
    industry: 'Technology',
    location: 'Bangalore, India',
    logo: 'https://api.dicebear.com/7.x/identicon/svg?seed=YuvaSetu'
};

export const DUMMY_JOBS = [
    {
        id: 'job-1',
        title: 'Senior Frontend Engineer',
        company: 'TechCorp',
        location: 'Bangalore (Remote)',
        type: 'Full-time',
        salary: '₹25L - ₹35L',
        postedAt: '2 days ago',
        description: 'We are looking for an experienced Frontend Engineer...',
        skills: ['React', 'TypeScript', 'Next.js'],
        applicants: 12,
        status: 'Active'
    },
    {
        id: 'job-2',
        title: 'Backend Developer',
        company: 'DataSystems',
        location: 'Mumbai',
        type: 'Full-time',
        salary: '₹18L - ₹25L',
        postedAt: '5 days ago',
        description: 'Join our backend team to build scalable APIs...',
        skills: ['Node.js', 'PostgreSQL', 'AWS'],
        applicants: 8,
        status: 'Active'
    },
    {
        id: 'job-3',
        title: 'Product Designer',
        company: 'DesignStudio',
        location: 'Remote',
        type: 'Contract',
        salary: '₹10L - ₹15L',
        postedAt: '1 week ago',
        description: 'Looking for a creative product designer...',
        skills: ['Figma', 'UI/UX', 'Prototyping'],
        applicants: 25,
        status: 'Closed'
    }
];

export const DUMMY_JOB_SEEKER_STATS = {
    totalApplications: 15,
    interviewsScheduled: 3,
    profileViews: 45,
    savedJobs: 8
};

export const DUMMY_EMPLOYER_STATS = {
    activeJobs: 3,
    totalApplicants: 128,
    interviewsScheduled: 12,
    shortlisted: 24
};

export const DUMMY_RECOMMENDED_JOBS = DUMMY_JOBS;

export const DUMMY_RECOMMENDED_CANDIDATES = [
    { ...DUMMY_JOB_SEEKER_PROFILE, uid: 'cand-1', displayName: 'Amit Sharma', matchScore: 95 },
    { ...DUMMY_JOB_SEEKER_PROFILE, uid: 'cand-2', displayName: 'Priya Singh', matchScore: 88 },
    { ...DUMMY_JOB_SEEKER_PROFILE, uid: 'cand-3', displayName: 'Rahul Verma', matchScore: 82 }
];

export const DUMMY_SKILL_GAP_ANALYSIS = {
    matchScore: 85,
    missingSkills: ['GraphQL', 'Docker'],
    recommendations: [
        'Take a course on GraphQL basics',
        'Learn Docker containerization'
    ]
};

export const DUMMY_APPLICATIONS = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'TechCorp',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png',
    status: 'Interviewing',
    appliedDate: '12 Jan 2024',
    location: 'Bangalore',
    timeline: [
      { step: 'Applied', date: '12 Jan 2024', status: 'completed', description: 'Application submitted successfully' },
      { step: 'Screening', date: '15 Jan 2024', status: 'completed', description: 'HR Screening call completed' },
      { step: 'Technical Round 1', date: '18 Jan 2024', status: 'completed', description: 'Data Structures & Algorithms' },
      { step: 'Technical Round 2', date: '22 Jan 2024', status: 'current', description: 'System Design Interview scheduled' },
      { step: 'Managerial Round', date: 'TBD', status: 'upcoming', description: 'Behavioral interview' },
      { step: 'Offer', date: 'TBD', status: 'upcoming', description: 'Final offer discussion' }
    ]
  },
  {
    id: 2,
    role: 'Product Designer',
    company: 'DesignStudio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
    status: 'Shortlisted',
    appliedDate: '10 Jan 2024',
    location: 'Remote',
    timeline: [
       { step: 'Applied', date: '10 Jan 2024', status: 'completed', description: 'Portfolio submitted' },
       { step: 'Portfolio Review', date: '12 Jan 2024', status: 'completed', description: 'Review by Design Lead' },
       { step: 'Design Task', date: '14 Jan 2024', status: 'current', description: 'Take-home assignment sent' },
       { step: 'Final Interview', date: 'TBD', status: 'upcoming', description: 'Team fitment round' }
    ]
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'StartupX',
    logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    status: 'Rejected',
    appliedDate: '05 Jan 2024',
    location: 'Mumbai',
    timeline: [
      { step: 'Applied', date: '05 Jan 2024', status: 'completed' },
      { step: 'Screening', date: '08 Jan 2024', status: 'completed' },
      { step: 'Technical Round', date: '10 Jan 2024', status: 'completed', description: 'Feedback: Strong backend skills but frontend proficiency needs improvement.' },
      { step: 'Rejection', date: '12 Jan 2024', status: 'rejected', description: 'Application not moving forward' }
    ]
  },
  {
    id: 4,
    role: 'React Native Dev',
    company: 'MobileFirst',
    logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
    status: 'Applied',
    appliedDate: '03 Jan 2024',
    location: 'Pune',
    timeline: [
       { step: 'Applied', date: '03 Jan 2024', status: 'current', description: 'Application under review' },
       { step: 'Screening', date: 'TBD', status: 'upcoming' }
    ]
  }
];

export const DUMMY_JOB_CANDIDATES = [
    { ...DUMMY_JOB_SEEKER_PROFILE, uid: 'cand-1', displayName: 'Amit Sharma', matchScore: 95, status: 'Applied' },
    { ...DUMMY_JOB_SEEKER_PROFILE, uid: 'cand-2', displayName: 'Priya Singh', matchScore: 88, status: 'Screening' },
    { ...DUMMY_JOB_SEEKER_PROFILE, uid: 'cand-3', displayName: 'Rahul Verma', matchScore: 82, status: 'Rejected' },
    { ...DUMMY_JOB_SEEKER_PROFILE, uid: 'cand-4', displayName: 'Sneha Gupta', matchScore: 75, status: 'Shortlisted' }
];

export const DUMMY_PARSED_RESUME = {
    personalInfo: {
        fullName: 'Demo User',
        email: 'demo@yuvasetu.com',
        phone: '9876543210',
        linkedin: 'https://linkedin.com/in/demouser',
        github: 'https://github.com/demouser',
        bio: 'Passionate frontend developer'
    },
    education: [
        { id: '1', institution: 'University of Technology', degree: 'B.Tech', year: 2021, score: '9.0' }
    ],
    experience: [
        { id: '1', role: 'Frontend Developer', company: 'Tech Solutions', duration: '2021-Present', description: 'Developed React apps' }
    ],
    projects: [
        { id: '1', title: 'Portfolio Website', description: 'Built with React and Tailwind', technologies: 'React, Tailwind', link: 'https://github.com/demouser/portfolio' }
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'HTML', 'CSS'],
    certifications: []
};

export const DUMMY_PYQS = [
    {
        company: 'Meta',
        profile: 'Frontend Engineer',
        source: 'Dummy Source',
        questions: [
            {
                question: 'What is the virtual DOM?',
                options: ['A direct copy of the real DOM', 'A lightweight copy of the DOM', 'A browser API', 'A JavaScript library'],
                answer: 'A lightweight copy of the DOM'
            },
            {
                question: 'Which hook is used for side effects in React?',
                options: ['useState', 'useReducer', 'useEffect', 'useMemo'],
                answer: 'useEffect'
            }
        ]
    },
    {
        company: 'Google',
        profile: 'SDE Intern',
        source: 'Dummy Source',
        questions: [
            {
                question: 'What is the time complexity of quicksort?',
                options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(1)'],
                answer: 'O(n log n)'
            },
            {
                question: 'Which data structure is used for BFS?',
                options: ['Stack', 'Queue', 'Tree', 'Graph'],
                answer: 'Queue'
            }
        ]
    }
];

