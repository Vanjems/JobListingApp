import React, { useState } from 'react';
import { BriefcaseBusiness, House, Phone, Mail, Smartphone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear error message when input changes
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize an object to store validation errors
    const newErrors = {};

    // Check if each field is empty and set an error message if it is
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    // If there are any errors, update the errors state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, show a success message and log form data
      alert('Message sent!');
      console.log(formData);
    }
  };

  return (
    <div className='relative flex flex-col md:flex-row justify-center items-center min-h-screen p-4 bg-gray-50'>
      {/* Container to ensure equal height */}
      <div className='flex flex-col md:flex-row w-full max-w-5xl'>
        {/* Left container */}
        <div className="flex flex-col justify-between items-center gap-4 p-6 border border-gray-300 rounded-lg shadow-lg w-full md:w-1/2 bg-white md:mr-4 mb-4 md:mb-0">
          {/* Company logo and name */}
          <div className="flex flex-row justify-center items-center gap-2 mb-4 mt-10">
            <BriefcaseBusiness size={50} />
            <button className="text-black text-2xl font-bold font-Manrope">
              <span className='text-yellow-600'>Kave</span><span className='text-black'>Job</span>
            </button>
          </div>

          {/* Contact information */}
          <div className="flex flex-col justify-center items-start gap-4 mb-4 w-full">
            <div className="flex flex-row items-center gap-2 mb-5">
              <House size={30} />
              <div className="text-black text-lg font-bold font-Manrope">
                Manansala.Subd General Santos City, South Cotabato, 9500
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 mb-5">
              <Smartphone size={30} />
              <div className="text-black text-lg font-bold font-Manrope">
                (+63) 991-234-5678
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 mb-5">
              <Phone size={30} />
              <div className="text-black text-lg font-bold font-Manrope">
                (123) 456-7890
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 mb-5">
              <Mail size={30} />
              <a href="https://www.google.com/intl/en-US/gmail/about/" className="text-black text-lg font-bold font-Manrope hover:text-yellow-700">
                Kavejob@gmail.com
              </a>
            </div>
          </div>

          {/* Social media links */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="text-lg font-bold mb-2">Follow Us</div>
            <div className="flex flex-row justify-center items-center gap-2 mb-10">
              <a href="https://www.facebook.com/" className="text-black hover:text-yellow-700"><Facebook size={30} /></a>
              <a href="https://www.instagram.com/" className="text-black hover:text-yellow-700"><Instagram size={30} /></a>
              <a href="https://x.com/?lang=en" className="text-black hover:text-yellow-700"><Twitter size={30} /></a>
              <a href="https://www.linkedin.com/" className="text-black hover:text-yellow-700"><Linkedin size={30} /></a>
            </div>
          </div>
        </div>

        {/* Right container with the contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 p-6 border border-gray-300 rounded-lg shadow-lg w-full md:w-1/2 bg-white">
          {/* Name input field */}
          <div className="flex flex-col w-full mb-4">
            <label className="text-lg font-Manrope font-bold mb-2" htmlFor="name">Name</label>
            <input
              className={`border border-gray-300 rounded p-2 text-lg w-full ${errors.name && 'border-red-500'}`}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email input field */}
          <div className="flex flex-col w-full mb-4">
            <label className="text-lg font-Manrope font-bold mb-2" htmlFor="email">Email</label>
            <input
              className={`border border-gray-300 rounded p-2 text-lg w-full ${errors.email && 'border-red-500'}`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Subject input field */}
          <div className="flex flex-col w-full mb-4">
            <label className="text-lg font-Manrope font-bold mb-2" htmlFor="subject">Subject</label>
            <input
              className={`border border-gray-300 rounded p-2 text-lg w-full ${errors.subject && 'border-red-500'}`}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          {/* Message input field */}
          <div className="flex flex-col w-full mb-4">
            <label className="text-lg font-Manrope font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              className={`border border-gray-300 rounded p-2 text-lg w-full ${errors.message && 'border-red-500'}`}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit button */}
          <button type="submit" className="bg-yellow-600 text-white text-lg font-bold font-Manrope rounded p-2 w-full hover:bg-yellow-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
