'use client';

import { useState } from 'react';

export default function Home() {
  const [sessionUrl, setSessionUrl] = useState('');

  const startVerification = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/veriff');
      const data = await response.json();
      console.log('API Response Data:', data);
      if (data.verification && data.verification.url) {
        setSessionUrl(data.verification.url);
        window.location.href = data.verification.url;
      } else {
        console.error('Verification URL not found in the response.');
      }
    } catch (error) {
      console.error('Error starting verification:', error);
    }
  };

  return (
    <div className='bg-white min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold mb-8'>Client Identity Verification</h1>
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105'
        onClick={startVerification}
      >
        <a
          href={sessionUrl}
        >
          Verify Now
        </a>
      </button>
    </div>
  );
}
