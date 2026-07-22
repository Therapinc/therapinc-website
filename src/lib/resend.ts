import { Resend } from 'resend';

// Initialize Resend client lazily to avoid throwing during static builds when env is missing
export const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not defined. Email dispatch will fail or run in mock mode.');
  }
  return new Resend(apiKey || 're_mock_key');
};
