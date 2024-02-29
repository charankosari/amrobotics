import { useState } from 'react';
import './Faq.css'
const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
    // Reset email state if needed
    setEmail('');
  };

  return (
    <div className='p-12'>
       
    <div className="form-container">
      <div className="logo-container">
        Forgot Password
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button className="form-submit-btn" type="submit">Send Email</button>
      </form>

     
    </div>
    </div>
  );
};

export default ResetPassword;
