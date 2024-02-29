import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='px-10 py-5 flex flex-col h-full'>
    
        <h1 className='text-black font-black text-2xl'>Contact Us</h1>
        <div>
        <form id="form">
          <div id="title">Contact us</div>
          <input type="text" placeholder="Your email" id="input"  className='bg-white'/>
          <textarea placeholder="Your message" className='bg-white' />
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
 
  );
}

export default ContactUs;
