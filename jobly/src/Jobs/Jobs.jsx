import React, { useState, useEffect } from 'react';
import JoblyApi from '../JoblyApi'; // Import the JoblyApi class
import JobCard from './JobCard'; // Import the JobsCard component

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await JoblyApi.getJobs(); // Use JoblyApi.getJobs() instead of axios
        setJobs(jobsData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Jobs Page</h1>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
