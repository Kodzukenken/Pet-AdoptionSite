import React, {useState} from 'react';
import PetPreviewCard from '../components/elements/petPreview-card';

const SearchPage = ({ pets }) => {
   
const [statusFilter, setStatusFilter] = useState('available'); // Default filter to 'available' pets

    // Filtered list based on status
const filteredPets = pets.filter(pet => {
  if (statusFilter === 'available') return pet.adoptionStatus === 'available';
  if (statusFilter === 'processing') return pet.adoptionStatus === 'processing';
  return true; // Show all if no filter is applied
});

  return (
    <div className="search-page">
      <h1> Pet Adoption Search </h1>

        {/* status filter */}

        {/* type filter */}
          <div className="filter-controls">
            <button onClick={() => setTypeFilter('dog')}> Dog </button>
            <button onClick={() => setTypeFilter('cat')}> Cat </button>
            <button onClick={() => setTypeFilter('')}> All Types </button>
          </div>

        {/* Filtered Pets */}
          <div className="pet-list">
            {filteredPets.map(pet => (
              <PetPreviewCard
                key={pet.id}
                id={pet.id}
                name={pet.name}
                age={pet.age}
                image={pet.image}
                adoptionStatus={pet.adoptionStatus}
          />
            ))}
        </div>
    </div>
  );
};

export default SearchPage;