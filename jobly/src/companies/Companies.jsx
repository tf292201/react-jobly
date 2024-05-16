import React, { useState, useEffect } from 'react';
import JoblyApi from '../JoblyApi'; // Import the JoblyApi class
import CompanyCard from './CompanyCard'; // Make sure CompanyCard is imported correctly

const CompanyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companiesData = await JoblyApi.getCompanies(); // Use JoblyApi.getCompanies() instead of axios
        setCompanies(companiesData);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
    fetchCompanies();
  }, []);

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Companies</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredCompanies.map(company => (
        <CompanyCard key={company.handle} company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
