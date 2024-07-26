import React from 'react';
import { BriefcaseBusiness, House, Phone, Mail, Smartphone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className='relative flex flex-col md:flex-row justify-center items-center min-h-screen p-4 bg-gray-50'>
      {/* Container to ensure equal height */}
      <div className='flex flex-col md:flex-row w-full max-w-5xl'>
        {/* Left container */}
        <div className="flex flex-col justify-between items-center gap-4 p-6 border border-gray-300 rounded-lg shadow-lg w-full md:w-1/2 bg-white md:mr-4 mb-4 md:mb-0"> {/* Add margin-right and margin-bottom */}
        <div className="flex flex-row justify-center items-center gap-2 mb-4 mt-10"> {/* Adjust margin-top */}
            <BriefcaseBusiness size={50} /> {/* Display logo icon */}
        <button className="text-black text-2xl font-bold font-Manrope">
            <span className='text-yellow-600'>Kave</span><span className='text-black'>Job</span> {/* Title text */}
        </button>
        </div>

          <div className="flex flex-col justify-center items-start gap-4 mb-4 w-full"> {/* Increased gap */}
            {/* Address Section */}
            <div className="flex flex-row items-center gap-2 mb-5"> {/* Add margin-bottom */}
              <House size={30} /> {/* Display icon */}
              <div className="text-black text-lg font-bold font-Manrope">
                Manansala.Subd General Santos City, South Cotabato, 9500
              </div>
            </div>

            {/* CellPhone Section */}
            <div className="flex flex-row items-center gap-2 mb-5"> {/* Add margin-bottom */}
              <Smartphone size={30} /> {/* Display icon */}
              <div className="text-black text-lg font-bold font-Manrope">
                (+63) 991-234-5678
              </div>
            </div>

            {/* TelePhone Section */}
            <div className="flex flex-row items-center gap-2 mb-5"> {/* Add margin-bottom */}
              <Phone size={30} /> {/* Display icon */}
              <div className="text-black text-lg font-bold font-Manrope">
                (123) 456-7890
              </div>
            </div>

            {/* Email Section */}
            <div className="flex flex-row items-center gap-2 mb-5"> {/* Add margin-bottom */}
              <Mail size={30} /> {/* Display icon */}
              <div className="text-black text-lg font-bold font-Manrope">
                Kavejob@gmail.com
              </div>
            </div>
          </div>

          {/* Social Media Links */}
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

        {/* Right container */}
        <div className="flex flex-col justify-center items-center gap-4 p-6 border border-gray-300 rounded-lg shadow-lg w-full md:w-1/2 bg-white">
          {/* Name Input Field */}
          <div className="flex flex-col w-full mb-4">
            <label className="text-lg font-Manrope font-bold mb-2" htmlFor="name">Name</label>
            <input className="border border-gray-300 rounded p-2 text-lg w-full" type="text" id="name" name="name" placeholder="Your Name" />
          </div>

          {/* Email Input Field */}
          <div className="flex flex-col w-full mb-4">
            <label className="text-lg font-Manrope font-bold mb-2" htmlFor="email">Email</label>
            <input className="border border-gray-300 rounded p-2 text-lg w-full" type="email" id="email" name="email" placeholder="Your Email" />
          </div>

          {/* Subject Input Field */}
          <div className="flex flex-col w-full mb-4">
            <label className="text-lg font-Manrope font-bold mb-2" htmlFor="subject">Subject</label>
            <input className="border border-gray-300 rounded p-2 text-lg w-full" type="text" id="subject" name="subject" placeholder="Subject" />
          </div>

          {/* Message Textarea Field */}
          <div className="flex flex-col w-full mb-4">
            <label className="text-lg font-Manrope font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="border border-gray-300 rounded p-2 text-lg w-full" id="message" name="message" placeholder="Your Message" rows="4"></textarea>
          </div>

          {/* Submit Button */}
          <button className="bg-yellow-600 text-white text-lg font-bold font-Manrope rounded p-2 w-full hover:bg-yellow-700">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
