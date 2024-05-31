import axios from 'axios';

const veriffApi = axios.create({
  baseURL: 'https://stationapi.veriff.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'X-AUTH-CLIENT': process.env.VERIFF_API_KEY
  }
});

export const createSession = async () => {
  try {
    const response = await veriffApi.post('/sessions', {
      verification: {
        callback: 'https://yourdomain.com/api/callback'
      }
    });
    console.log('Veriff API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
};
