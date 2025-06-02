// src/components/JobList.jsx
import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetchJobs();
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    getJobs();
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>{job.title}</div>
      ))}
    </div>
  );
};

export default JobList;
