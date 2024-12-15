import React, { useState } from 'react';
import PetPreviewCard from '../components/elements/petPreview-card';
import '../styles/searchPage.css';

const SearchPage = ({ pets }) => {
  const [statusFilter, setStatusFilter] = useState('all'); // 'available' or 'processing'
  const [typeFilter, setTypeFilter] = useState(''); // 'dog', 'cat', or ''

  // Filter pets based on status and type
  const filteredPets = pets.filter(pet => {
    const matchesStatus = statusFilter === 'all' || pet.adoptionStatus === statusFilter;
    const matchesType = typeFilter === '' || pet.type === typeFilter;
    return matchesStatus && matchesType;
  });

  return (
    <div className="search-page">
      <h1>Pet Adoption Search</h1>

      {/* Status Filter */}
      <div className="filter-controls">
        <h2>Filter by Status</h2>
        <button onClick={() => setStatusFilter('available')}>Available</button>
        <button onClick={() => setStatusFilter('processing')}>Processing</button>
        <button onClick={() => setStatusFilter('all')}>All Status</button>
      </div>

      {/* Type Filter */}
      <div className="filter-controls">
        <h2>Filter by Type</h2>
        <button onClick={() => setTypeFilter('dog')}>Dog</button>
        <button onClick={() => setTypeFilter('cat')}>Cat</button>
        <button onClick={() => setTypeFilter('')}>All Types</button>
      </div>

      {/* Display Filtered Pets */}
      <div className="pet-list">
        {filteredPets.length > 0 ? (
          filteredPets.map(pet => (
            <PetPreviewCard
              key={pet.id}
              id={pet.id}
              name={pet.name}
              age={pet.age}
              image={pet.image}
              adoptionStatus={pet.adoptionStatus}
            />
          ))
        ) : (
          <p className="no-results">No pets found. Please adjust your filters.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
