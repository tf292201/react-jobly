import React, { useState, useEffect } from 'react';
import JoblyApi from '../JoblyApi'; // Import the JoblyApi class
import { useParams } from 'react-router-dom';

const CompanyDetail = () => {
  const { handle } = useParams(); // Extract handle parameter from URL
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await JoblyApi.getCompany(handle); // Use JoblyApi.getCompany(handle) instead of axios
        setCompany(companyData);
      } catch (error) {
        console.error('Error fetching company:', error);
      }
    };
    fetchCompany();
  }, [handle]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <p>Number of Employees: {company.numEmployees}</p>
    </div>
  );
}

export default CompanyDetail;
