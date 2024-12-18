import { useState, FormEvent } from 'react';
import './index.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target as HTMLFormElement, import.meta.env.VITE_PUBLIC_KEY)

    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='contact-form-container'>
      <div className='section-title-container'>
        <h1 className='section-title'>Contact</h1>
        <h4 className='section-subtitle'>Want to reach out?  Found a bug?  Fill out the form below and let me know!</h4>
      </div>

      <form onSubmit={handleSubmit} className='form-container'>

        <div className='input-container'>
          <label className='input-label'>Email</label>
          <input type="email" value={email} placeholder="Email" name="email" onChange={(e) => { setEmail(e.target.value) }} className='input-bar' />
        </div>

        <div className='input-container'>
          <label className='input-label'>Subject</label>

          <input type="text" value={subject} placeholder="Subject" name="subject" onChange={(e) => { setSubject(e.target.value) }} className='input-bar' />
        </div>

        <div className='input-container'>
          <label className='input-label'>
            Message
          </label>

          <textarea value={message} placeholder="Message" name="message" onChange={(e) => { setMessage(e.target.value) }} className='message-box' />
        </div>

        <div className='submit-container'>
          <button type="submit" className='submit-button'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;