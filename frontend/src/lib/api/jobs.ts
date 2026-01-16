
import { DUMMY_APPLICATIONS, DUMMY_JOB_CANDIDATES } from '@/data/dummyData';

const API_BASE_URL = 'http://localhost:5000/api';

const mockDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const applyJob = async (jobId: string, token: string, resumeUrl?: string) => {
    await mockDelay(500);
    console.log('Dummy applyJob called', jobId, resumeUrl);
    return { success: true, message: 'Applied successfully' };
};

export const fetchMyApplications = async (token: string) => {
    await mockDelay(500);
    console.log('Dummy fetchMyApplications called');
    return DUMMY_APPLICATIONS;
};

export const updateApplicationStatus = async (jobId: string, candidateUserId: string, status: string, token: string) => {
    await mockDelay(500);
    console.log('Dummy updateApplicationStatus called', jobId, candidateUserId, status);
    return { success: true, status };
};

export const fetchJobCandidates = async (jobId: string, token: string) => {
    await mockDelay(500);
    console.log('Dummy fetchJobCandidates called', jobId);
    return DUMMY_JOB_CANDIDATES;
};
