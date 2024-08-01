import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jobData from '../../assets/JobData.json'; // Adjust the path if necessary
import { ArrowBigUpDash, Briefcase, MapPin, HandCoins, Clock } from 'lucide-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Job() {
  const [filters, setFilters] = useState({
    jobType: [],
    location: [],
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [loading, setLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

  useEffect(() => {
    setFilteredJobs(jobData);
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const results = jobData.filter((job) => {
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
      setFilteredJobs(results);
      setLoading(false);
    }, 1000); // Simulate a loading delay
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex pt-[110px] bg-gray-100 gap-2">
      {/* Sticky Filter Section */}
      <div className="w-full md:w-1/6 h-screen bg-white shadow-lg p-5 sticky top-[110px] rounded-lg border border-gray-300 hidden sm:block">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-600">Filter</h2>

        {/* Job Type Filter */}
        <h3 className="font-semibold mb-2 flex items-center">
          <Clock className="mr-2 text-yellow-600" /> Job Type
        </h3>
        <div className="grid grid-cols-1 mb-4">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value="All"
              checked={filters.jobType.includes('All')}
              onChange={handleJobTypeChange}
              className="form-checkbox"
            />
            <span className="ml-2">All</span>
          </label>
          {['Full-Time', 'Part-Time', 'Remote'].map((type) => (
            <label className="inline-flex items-center cursor-pointer mt-2" key={type}>
              <input
                type="checkbox"
                value={type}
                checked={filters.jobType.includes(type)}
                onChange={handleJobTypeChange}
                className="form-checkbox"
              />
              <span className="ml-2">{type}</span>
            </label>
          ))}
        </div>

        {/* Location Filter */}
        <h3 className="font-semibold mb-2 flex items-center">
          <MapPin className="mr-2 text-yellow-600" /> Location
        </h3>
        <div className="grid grid-cols-1 mb-4">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value="All"
              checked={filters.location.includes('All')}
              onChange={handleLocationChange}
              className="form-checkbox"
            />
            <span className="ml-2">All</span>
          </label>
          {['Mindanao', 'Visayas', 'Luzon'].map((loc) => (
            <label className="inline-flex items-center cursor-pointer mt-2" key={loc}>
              <input
                type="checkbox"
                value={loc}
                checked={filters.location.includes(loc)}
                onChange={handleLocationChange}
                className="form-checkbox"
              />
              <span className="ml-2">{loc}</span>
            </label>
          ))}
        </div>

        {/* Clear All Filters Button */}
        <button
          onClick={() => setFilters({ jobType: [], location: [] })}
          className="mt-4 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition duration-200"
        >
          Clear All Filters
        </button>
      </div>

      <div className="w-full md:w-5/6 h-auto bg-white shadow-lg p-5 rounded-lg border border-gray-300">
        <div className="container mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-yellow-600">Job Listing</h1>
          <p className="text-lg mb-8">Search the job you want below...</p>
          <div className="flex justify-center items-center mb-8">
            <input
              type="text"
              placeholder="Search for Job Titles or Company Name..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-1/2 p-2 border rounded-l-md shadow-sm"
            />
            <button
              className="p-2 bg-yellow-600 text-white rounded-r-md hover:bg-yellow-500 duration-1000"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        
        {/* Dropdown Filter Section */}
        <div className="flex justify-center mb-4 sm:hidden">
          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded-md"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            Show Filters
          </button>
        </div>
        {showDropdown && (
          <div className="bg-white shadow-lg p-4 mb-4 sm:hidden">
            {/* Job Type Filter in Dropdown */}
            <h3 className="font-semibold mb-2 flex items-center">
              <Clock className="mr-2 text-yellow-600" /> Job Type
            </h3>
            <div className="grid grid-cols-1 mb-4">
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
              {['Full-Time', 'Part-Time', 'Remote'].map((type) => (
                <label className="inline-flex items-center mt-2" key={type}>
                  <input
                    type="checkbox"
                    value={type}
                    checked={filters.jobType.includes(type)}
                    onChange={handleJobTypeChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>

            {/* Location Filter in Dropdown */}
            <h3 className="font-semibold mb-2 flex items-center">
              <MapPin className="mr-2 text-yellow-600" /> Location
            </h3>
            <div className="grid grid-cols-1 mb-4">
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
              {['Mindanao', 'Visayas', 'Luzon'].map((loc) => (
                <label className="inline-flex items-center mt-2" key={loc}>
                  <input
                    type="checkbox"
                    value={loc}
                    checked={filters.location.includes(loc)}
                    onChange={handleLocationChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{loc}</span>
                </label>
              ))}
            </div>

            <button
          onClick={() => setFilters({ jobType: [], location: [] })}
          className="mt-4 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition duration-200"
        >
          Clear All Filters
        </button>

          </div>
        )}
        
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Jobs Found ({filteredJobs.length})
        </h2>
        {loading ? (
          <div className="text-center text-lg">Loading...</div>
        ) : (
          <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <CSSTransition key={job.id} timeout={300} classNames="fade">
                  <div 
                    key={job.id} 
                    className="bg-white p-4 shadow-lg hover:shadow-xl transition duration-300 border border-gray-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="font-bold text-lg mb-2">{job.jobTitle}</div>
                      <div className="text-gray-700 mb-1">{job.companyName}</div>
                      <div className="text-gray-600 mb-1 flex items-center">
                        <MapPin size={16} className="mr-1" /> {job.location}
                      </div>
                      <div className="text-gray-600 mb-1 flex items-center">
                        <HandCoins size={16} className="mr-1" /> {job.monthlySalaryRange}
                      </div>
                      <div className="text-gray-600 mb-1 flex items-center">
                        <Clock size={16} className="mr-1" /> {job.type}
                      </div>
                    </div>
                    <Link
                      className="mt-4 block text-center px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 transition"
                      to={`/jobdetails/${job.id}`}
                    >
                      More Details
                    </Link>
                  </div>
                </CSSTransition>
              ))
            ) : (
              <div className="text-center text-lg">No jobs found</div>
            )}
          </TransitionGroup>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-700 text-white rounded-full p-3 shadow-lg hover:bg-yellow-500 transition"
        >
          <ArrowBigUpDash size={24} />
        </button>
      )}
    </div>
  );
}
