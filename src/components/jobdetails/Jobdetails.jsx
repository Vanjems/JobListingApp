import React from 'react';
import jobData from '../../assets/JobData.json';
import { HandCoins, MapPin, Briefcase, Clock, CheckCircle } from 'lucide-react'; // Importing icons from lucide-react
import { CSSTransition } from 'react-transition-group';

export default function Jobdetails({ id }) {
  const job = jobData.find(job => job.id === parseInt(id));

  if (!job) {
    return <div className="text-center text-red-500 font-bold">Job not found</div>;
  }

  return (
    <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
    <div className='w-full bg-gray-100 p-6 pt-[120px]'>
      <div className="flex flex-col max-w-3xl mx-auto">
        {/* Job Details and the Back Button */}
        <div className="flex flex-row justify-center items-center mb-6">
          <h1 className="text-4xl font-bold text-yellow-600 mx-auto">Job Details</h1>
          <a className='rounded-full bg-yellow-600 text-white py-2 px-5 hover:bg-yellow-500 
          transition duration-300 whitespace-nowrap' href='/jobpage'>Back to Listing</a>
        </div>
        
        {/* Job Title to Company images */}
        <div className="flex flex-col bg-white shadow-md rounded-lg p-6">
            {/* The Job title, Location, Company Name, Job Details */}
            <div className="flex flex-col gap-y-3">
              <h2 className="text-2xl font-bold">{job.jobTitle}</h2>
              <div className="flex items-center">
                <HandCoins className="mr-2 text-yellow-600" />
                Monthly Salary Range: <span className="font-semibold">{job.monthlySalaryRange}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="mr-2 text-yellow-600" />
                Company Name: <span className="font-semibold">{job.companyName}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-yellow-600" />
                Location: <span className="font-semibold">{job.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 text-yellow-600" />
                Type: <span className="font-semibold">{job.type}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Job Description:</h3>
                <p className="mt-2">{job.jobDescription}</p>
              </div>
            </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Job Requirements:</h3>
            <ul className="list-disc list-inside">
              {job.jobRequirements.map((requirement, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-2 text-yellow-600" />
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">How to Apply:</h3>
            <p>{job.howToApply}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Company Information:</h3>
            <p>{job.companyInformation}</p>
          </div>
        </div>
      </div>
    </div>
    </CSSTransition>
  );
}
