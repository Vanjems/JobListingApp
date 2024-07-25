import React from 'react'
import { BriefcaseBusiness, House, Phone, Mail, Facebook, Instagram, Twitter, Linkedin} from 'lucide-react';

export default function Contact() {
  return (
<div className='flex flex-row justify-between items-center h-fit px-fit'>
        {/* left container */}
        <div className="flex flex-col justify-center items-center gap-x-7">
          <div className="flex flex-row justify-center items-center gap-x-2">
            <BriefcaseBusiness size={50} /> {/* Display logo icon */}
            <button className="text-black text-2xl font-bold font-Manrope">
              <span className='text-yellow-600'>Kave</span><span className='text-black'>Job</span> {/* Title text */}
            </button>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-2">
            <House size={30} /> {/* Display icon */}
            <div className="text-black text-2xl font-bold font-Manrope">
              <span>Manansala.Subd General Santos City, South Cotabato, 9500</span> {/* Title text */}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-2">
            <Phone size={30} /> {/* Display icon */}
            <div className="text-black text-2xl font-bold font-Manrope">
              <span>(123) 456-7890</span> {/* Title text */}
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-2">
            <Mail size={30} /> {/* Display icon */}
            <div className="text-black text-2xl font-bold font-Manrope">
              <span>Kavejob@gmail.com</span> {/* Title text */}
            </div>
          </div>

          <span className="text-lg text-bold">Follow US</span>

          <div className="flex flex-row justify-center items-center gap-x-2">
          <a href="https://www.facebook.com/" className="text-black hover:bg-yellow-700"><Facebook/></a>
          <a href="https://www.instagram.com/" className="text-black hover:bg-yellow-700"><Instagram/></a>
          <a href="https://x.com/?lang=en" className="text-black hover:bg-yellow-700"><Twitter/></a>
          <a href="https://www.linkedin.com/" className="text-black hover:bg-yellow-700"><Linkedin/></a>

          </div>
        </div>
        
        {/* right container */}
        <div className="flex flex-row gap-x-5">
            <button>Log in</button>
            <button className='bg-blue-300 text-sm rounded-full text-black px-4 py-2 font-semibold'>Get Start</button>
        </div>
    </div>
  )
}
