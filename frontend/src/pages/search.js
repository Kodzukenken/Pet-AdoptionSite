import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PetPreviewCard from "../components/elements/petPreview-card";
import petsData from "../data/petsData";
import "../styles/searchPage.css";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const clearFilter = (filterType) => {
    if (filterType === "type") {
      setTypeFilter("");
    }
    if (filterType === "status") {
      setStatusFilter("");
    }
  }
  // Filtered Pets List
  const filteredPets = petsData.filter((pet) => {
    return (
      (!typeFilter || pet.type === typeFilter) &&
      (!statusFilter || pet.status === statusFilter) &&
      (!searchQuery ||
        pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev">{"<"}</button>,
    nextArrow: <button className="slick-next">{">"}</button>,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="search-page">
      <h1>Pet Adoption Search</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for pets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="filter-controls">
        <button onClick={() => setTypeFilter("")}>All Types</button>
        <button onClick={() => setTypeFilter("cat")}>Cats</button>
        <button onClick={() => setTypeFilter("dog")}>Dogs</button>
        <button onClick={() => setStatusFilter("")}>All Status</button>
        <button onClick={() => setStatusFilter("available")}>Available</button>
        <button onClick={() => setStatusFilter("processing")}>Processing</button>
      </div>

      <div className="active-filters">
        {typeFilter && 
        (<span className="filter-badge">
          Type: {typeFilter}
          <button onCliclick={() => clearFilter("type")}>✕</button>
          </span>
        )}

        {statusFilter && 
        (<span className="filter-badge">
          Type: {statusFilter}
          <button onCliclick={() => clearFilter("status")}>✕</button>
          </span>
        )}

      </div>

      {/* Search Results */}
      {filteredPets.length > 0 ? (
        <div className="search-result">
          {filteredPets.map((pet) => (
            <PetPreviewCard
              key={pet.id}
              name={pet.name}
              type={pet.type}
              age={pet.age}
              breed={pet.breed}
              status={pet.status}
              image={pet.image}
            />
          ))}
        </div>
      ) : (
        <p>No pets found. Adjust your filters or try another search term.</p>
      )}

      {/* Cats Section */}
      {/* <div className="slider-section">
        <h2>Adoptable Cats</h2>
        <Slider {...sliderSettings}>
          {petsData
            .filter((pet) => pet.type === "cat")
            .map((cat) => (
              <PetPreviewCard
                key={cat.id}
                name={cat.name}
                type={cat.type}
                age={cat.age}
                breed={cat.breed}
                status={cat.status}
                image={cat.image}
              />
            ))}
        </Slider>
      </div> */}

      {/* Dogs Section */}
      {/* <div className="slider-section">
        <h2>Adoptable Dogs</h2>
        <Slider {...sliderSettings}>
          {petsData
            .filter((pet) => pet.type === "dog")
            .map((dog) => (
              <PetPreviewCard
                key={dog.id}
                name={dog.name}
                type={dog.type}
                age={dog.age}
                breed={dog.breed}
                status={dog.status}
                image={dog.image}
              />
            ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default SearchPage;
