import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jobData from '../../assets/JobData.json'; // Adjust the path if necessary

export default function Job() {
  const [filters, setFilters] = useState({
    jobType: [],
    location: [],
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleJobTypeChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) => {
      const updatedJobType = checked
        ? [...prevFilters.jobType, value]
        : prevFilters.jobType.filter((type) => type !== value);

      if (value === 'All') {
        return { ...prevFilters, jobType: checked ? ['All'] : [] };
      }

      return {
        ...prevFilters,
        jobType: updatedJobType.filter((type) => type !== 'All'),
      };
    });
  };

  const handleLocationChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) => {
      const updatedLocation = checked
        ? [...prevFilters.location, value]
        : prevFilters.location.filter((loc) => loc !== value);

      if (value === 'All') {
        return { ...prevFilters, location: checked ? ['All'] : [] };
      }

      return {
        ...prevFilters,
        location: updatedLocation.filter((loc) => loc !== 'All'),
      };
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredJobs = jobData.filter((job) => {
    const matchesJobType =
      filters.jobType.includes('All') ||
      filters.jobType.length === 0 ||
      filters.jobType.includes(job.type);
    const matchesLocation =
      filters.location.includes('All') ||
      filters.location.length === 0 ||
      filters.location.includes(job.location);
    const matchesSearchQuery =
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesJobType && matchesLocation && matchesSearchQuery;
  });

  return (
    <div>
      <div className="flex flex-col">
        <div className="">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Job Listing</h1>
            <p className="text-lg mb-8">Search the Job you want below...</p>
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Search for Job Titles or Company Name..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-1/2 p-2 border rounded-l-md shadow-sm"
              />
              <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row gap-10 mt-10">
          <div className="flex flex-col w-full md:w-1/3 h-auto bg-red-200 p-5">
            <h2 className="text-2xl font-bold mb-4 text-center">Filter</h2>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Job Type</h3>
              <div className="grid grid-cols-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="All"
                    checked={filters.jobType.includes('All')}
                    onChange={handleJobTypeChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">All</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    value="Full-Time"
                    checked={filters.jobType.includes('Full-Time')}
                    onChange={handleJobTypeChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Full-Time</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    value="Part-Time"
                    checked={filters.jobType.includes('Part-Time')}
                    onChange={handleJobTypeChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Part-Time</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    value="Remote"
                    checked={filters.jobType.includes('Remote')}
                    onChange={handleJobTypeChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Remote</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <div className="grid grid-cols-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value="All"
                    checked={filters.location.includes('All')}
                    onChange={handleLocationChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">All</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    value="Mindanao"
                    checked={filters.location.includes('Mindanao')}
                    onChange={handleLocationChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Mindanao</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    value="Visayas"
                    checked={filters.location.includes('Visayas')}
                    onChange={handleLocationChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Visayas</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    value="Luzon"
                    checked={filters.location.includes('Luzon')}
                    onChange={handleLocationChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Luzon</span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-auto bg-red-200 p-5">
            <h2 className="text-2xl font-bold mb-4 text-center">Job List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {filteredJobs.map((job) => (
                <div className="">
                <div
                  key={job.id}
                  className="bg-yellow-400 p-4 rounded-md shadow-md flex flex-col items-center justify-center"
                >
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center mb-4">
                    Company Logo or Image Portion
                  </div>
                  <div className="w-full h-auto bg-gray-200 mb-4 flex flex-col justify-center items-center">
                    <div className="font-bold text-lg">{job.jobTitle}</div>
                    <div>{job.companyName}</div>
                    <div>{job.location}</div>
                    <div>{job.monthlySalaryRange}</div>
                    <div>{job.type}</div>
                  </div>
                  <Link
                    className="px-4 py-2 bg-gray-500 text-white rounded-md"
                    to={`/jobdetails/${job.id}`}
                  >
                    More Details
                  </Link>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
