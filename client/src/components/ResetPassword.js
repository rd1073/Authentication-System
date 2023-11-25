import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      // Send a request to your backend to reset the password
      const response = await fetch(`http://localhost:5000/api/user/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      // Display a success or error message to the user
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <label>New Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleResetPassword}>Submit</button>
    </div>
  );
};

export default ResetPassword;
