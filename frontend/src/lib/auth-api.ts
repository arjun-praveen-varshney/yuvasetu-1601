import { auth } from './firebase';
import {
    DUMMY_USER,
    DUMMY_JOB_SEEKER_PROFILE,
    DUMMY_EMPLOYER_PROFILE,
    DUMMY_JOBS,
    DUMMY_JOB_SEEKER_STATS,
    DUMMY_EMPLOYER_STATS,
    DUMMY_RECOMMENDED_JOBS,
    DUMMY_RECOMMENDED_CANDIDATES,
    DUMMY_SKILL_GAP_ANALYSIS
} from '../data/dummyData';

export const API_BASE_URL = 'http://localhost:5000';

export interface RegisterUserParams {
    idToken: string;
    role: 'JOB_SEEKER' | 'EMPLOYER';
    authProvider?: 'email' | 'google';
}

export interface APIResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    code?: string;
}

const mockDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const registerUser = async ({ idToken, role, authProvider }: RegisterUserParams) => {
    await mockDelay(500);
    console.log('Dummy registerUser called', { role, authProvider });
    return role === 'EMPLOYER' ? DUMMY_EMPLOYER_PROFILE : DUMMY_JOB_SEEKER_PROFILE;
};

export const loginUser = async (idToken: string) => {
    await mockDelay(500);
    console.log('Dummy loginUser called');
    return DUMMY_USER;
};

export const completeOnboarding = async (token: string) => {
    await mockDelay(500);
    console.log('Dummy completeOnboarding called');
    return { ...DUMMY_USER, onboardingCompleted: true };
};

export const updateProfile = async (token: string, data: any) => {
    await mockDelay(500);
    console.log('Dummy updateProfile called', data);
    return { ...DUMMY_USER, ...data };
};

export const fetchProtectedData = async (endpoint: string, token: string) => {
    await mockDelay(300);
    console.log('Dummy fetchProtectedData called', endpoint);
    if (endpoint.includes('/api/job-seeker/profile') || endpoint.includes('/auth/me')) {
        return DUMMY_JOB_SEEKER_PROFILE;
    }
    if (endpoint.includes('/api/employer/profile')) {
        return DUMMY_EMPLOYER_PROFILE;
    }
    return { message: 'Protected data fetched' };
};

export const checkForgotPassword = async (email: string) => {
    await mockDelay(300);
    console.log('Dummy checkForgotPassword called', email);
    return { success: true, message: 'If an account exists, an email has been sent.' };
};

export const saveJobSeekerProfile = async (token: string, data: any) => {
    await mockDelay(500);
    console.log('Dummy saveJobSeekerProfile called', data);
    return { ...DUMMY_JOB_SEEKER_PROFILE, ...data };
};

export const getJobSeekerProfile = async (token: string) => {
    await mockDelay(300);
    console.log('Dummy getJobSeekerProfile called');
    return DUMMY_JOB_SEEKER_PROFILE;
};

export const deleteUserAccount = async (token: string) => {
    await mockDelay(500);
    console.log('Dummy deleteUserAccount called');
    return { success: true };
};

export const updateEmployerProfile = async (token: string, data: any) => {
    await mockDelay(500);
    console.log('Dummy updateEmployerProfile called', data);
    return { ...DUMMY_EMPLOYER_PROFILE, ...data };
};

export const createJob = async (token: string, data: any) => {
    await mockDelay(500);
    console.log('Dummy createJob called', data);
    const newJob = { ...DUMMY_JOBS[0], ...data, id: `job-${Date.now()}` };
    return newJob;
};

export const fetchJobs = async (token: string, status?: string) => {
    await mockDelay(300);
    console.log('Dummy fetchJobs called', status);
    return DUMMY_JOBS;
};

export const updateJob = async (token: string, id: string, data: any) => {
    await mockDelay(500);
    console.log('Dummy updateJob called', id, data);
    return { ...DUMMY_JOBS[0], ...data, id };
};

export const deleteJob = async (token: string, id: string) => {
    await mockDelay(500);
    console.log('Dummy deleteJob called', id);
    return { success: true, id };
};

export const fetchJobById = async (token: string, id: string) => {
    await mockDelay(300);
    console.log('Dummy fetchJobById called', id);
    const job = DUMMY_JOBS.find(j => j.id === id) || DUMMY_JOBS[0];
    return job;
};

export const fetchRecommendedJobs = async (token: string) => {
    await mockDelay(300);
    console.log('Dummy fetchRecommendedJobs called');
    return DUMMY_RECOMMENDED_JOBS;
};

export const fetchRecommendedCandidates = async (token: string, jobId: string) => {
    await mockDelay(300);
    console.log('Dummy fetchRecommendedCandidates called', jobId);
    return DUMMY_RECOMMENDED_CANDIDATES;
};

export const fetchDashboardStats = async (token: string) => {
    await mockDelay(300);
    console.log('Dummy fetchDashboardStats called');
    return DUMMY_JOB_SEEKER_STATS;
};

export const fetchEmployerDashboardStats = async (token: string) => {
    await mockDelay(300);
    console.log('Dummy fetchEmployerDashboardStats called');
    return DUMMY_EMPLOYER_STATS;
};

export const uploadResumeFile = async (file: File, token: string) => {
    await mockDelay(1000);
    console.log('Dummy uploadResumeFile called', file.name);
    return { success: true, fileUrl: 'https://example.com/dummy-resume.pdf' };
};

export const fetchCandidateById = async (token: string, userId: string) => {
    await mockDelay(300);
    console.log('Dummy fetchCandidateById called', userId);
    return { ...DUMMY_JOB_SEEKER_PROFILE, uid: userId };
};

export const analyzeSkillGap = async (token: string, jobId: string) => {
    await mockDelay(1000);
    console.log('Dummy analyzeSkillGap called', jobId);
    return DUMMY_SKILL_GAP_ANALYSIS;
};

