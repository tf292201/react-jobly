import React from 'react';
import { Link } from 'react-router-dom';

const JobsCard = ({ job }) => {
  return (
    <Link to={`/jobs/${job.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <p>Company: {job.companyName}</p>
      </div>
    </Link>
  );
}

export default JobsCard;
