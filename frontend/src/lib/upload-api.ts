
const mockDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const uploadFile = async (file: File, token: string): Promise<string> => {
    await mockDelay(1000);
    console.log('Dummy uploadFile called', file.name);
    return `https://example.com/uploads/${file.name}`;
};
