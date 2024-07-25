import React from 'react'

export default function Jobdetails() {
  return (
    <div className='w-full '>
        <div className="flex flex-col">
            {/* Job Details and the Back Button */}
            <div className="flex flex-row">
            <div className="container mx-auto text-center relative">
            <h1 className="text-4xl font-bold mb-4">Job Details</h1>
            </div>
            <button className='rounded-full bg-yellow-500 py-2 px-5 absolute right-[200px]'>Back to Listing</button>
            </div>
            {/* Job Title to Company images */}
            <div className="flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* The Job title, Location, Company Name, Job Details */}
                    <div className="flex flex-col gap-y-5">
                            <div className="">Company Name:</div>
                            <div className="">Location: </div>
                            <div className="">Type: </div>
                            <div className="">Job Descrption: </div>

                    </div>

                    {/* The Image Portion */}
                    <div className="h-[100px] w-[50px] bg-red-100"> I AM AN IMAGE</div>

                </div>
                <div className="">Job Requirements: 
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <div className="">
                    How to Apply:
                </div>
                <div className="">
                    Company Information:
                </div>
                <div className="flex flex-row justify-between">
                    <div className="h-[100px] w-[100px] bg-red-100">I AM AN IMAGE</div>
                    <div className="h-[100px] w-[100px] bg-red-100">I AM AN IMAGE</div>
                    <div className="h-[100px] w-[100px] bg-red-100">I AM AN IMAGE</div>
                </div>
            </div>
        </div>
    </div>
  )
}
