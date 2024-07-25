import React from 'react'
import { Target, BookOpenText, UsersRound, HandCoins } from 'lucide-react';


export default function About() {
  return (
    <div className="flex flex-col max-w-auto justify-center items-center bg-red-500">
        <div className="flex flex-row justify-center items-center bg-blue-500">
            <Target size={50}/>
            <span className=''>Our Mission</span>
            <span className=''>We aim to connect job seekers with their dream jobs and employers with ideal candidates through an intuitive and efficient platform.</span>
        </div>

        <div className='flex flex-row justify-center items-center bg-green-500'>
            <BookOpenText size={50}/>
            <span classname="">Our Story</span>
            <span classname="">Founded in 2024, our company was born out of the need for a streamlined and user-friendly job listing platform. We believe in making the job search process easy and accessible for everyone.</span>
        </div>

        <div className="flex flex-row justify-center items-center bg-blue-500">
            <UsersRound size={50}/>
            <span>Our Team</span>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
        <span className='flex flex-col justify-center items-center text-balance'>OLSEN Ceo</span>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
        <span className='flex flex-col justify-center items-center'>OLSEN Ceo</span>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
        <span className='flex flex-col justify-center items-center'>OLSEN Ceo</span>
    </div>

            </div>
        </div>

        <div className='flex flex-row justify-center items-center bg-green-500'>
            <HandCoins size={50}/>
            <span classname="">What we Offer</span>
            <span>Comprehensive job listings                                                    
            Advanced search and filter options   
            Detailed job descriptions and company profiles 
            Resources for job seekers (career advice, resume tips, etc.)</span>
        </div>
    </div>
  )
}
