// GmailAccountPage.js
import React, { useEffect } from 'react';

function GmailAccountPage() {
  useEffect(() => {
    // Redirect to Gmail account
    window.location.href = 'https://mail.google.com/';
  }, []); // Empty dependency array ensures this effect runs only once after component mounts

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>Redirecting to Gmail...</h1>
      <p>If you are not redirected, click <a className='text-blue-500' href="https://mail.google.com/">here</a>.</p>
    </div>
  );
}

export default GmailAccountPage;
