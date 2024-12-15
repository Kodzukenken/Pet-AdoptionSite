import React, { useRef, useState } from "react";
import "../styles/dogAdoption.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import petsData from "../data/petsData";
import dogHouse from "../assets/dogHouse.jpg"
import dogFood from "../assets/dogFood.jpeg"
import dogPlay from "../assets/dogPlay.jpg"

const DogAdoption = () => {
  const sliderRef = useRef(null);
  const [viewAll, setViewAll] = useState(false);

  // Filter only dogs
  const dogs = petsData.filter((pet) => pet.type === "dog");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="dog-adoption-page">
      <div className="dog-adoption-intro">
        <h1 className="dog-adoption-title">Dog & Puppy Adoption</h1>
        <div className="dog-adoption-description">
          <p>
            Looking to welcome a new dog or puppy into your family? We can help you find the perfect furry friend to match your lifestyle.
          </p>
        </div>
      </div>

      <div className="dog-slider-wrapper">
        <div className="dog-slider-header">
          <span className="view-all" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Slider" : "View All"}
          </span>
        </div>

        {viewAll ? (
          <div className="dog-grid">
            {dogs.map((dog) => (
              <div key={dog.id} className="dog-card">
                <img src={dog.image} alt={dog.name} className="dog-card-image" />
                <h3 className="dog-card-name">{dog.name}</h3>
                <p className="dog-card-breed">{dog.breed}</p>
                <p className="dog-card-age">Age: {dog.age} years</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="slider-container">
            <button
              className="custom-arrow left-arrow"
              onClick={() => sliderRef.current.slickPrev()}
            >
              &#9664;
            </button>
            <Slider ref={sliderRef} {...sliderSettings}>
              {dogs.map((dog) => (
                <div key={dog.id} className="dog-card">
                  <img src={dog.image} alt={dog.name} className="dog-card-image" />
                  <h3 className="dog-card-name">{dog.name}</h3>
                  <p className="dog-card-breed">{dog.breed}</p>
                  <p className="dog-card-age">Age: {dog.age} years</p>
                </div>
              ))}
            </Slider>
            <button
              className="custom-arrow right-arrow"
              onClick={() => sliderRef.current.slickNext()}
            >
              &#9654;
            </button>
          </div>
        )}
      </div>

      <div className="new-dog-section">
        <h2 className="new-dog-title">For Your New Dog</h2>
        <p className="new-dog-description">
          Bringing a new dog home can be an exciting experience! Here are some essential tips to help you take care of your new furry friend:
        </p>
        <div className="new-dog-tips">
          <div className="tip-card">
            <img src={dogHouse} alt="Safe Space" />
            <h3>Create a Safe Space</h3>
            <p>Set up a quiet and cozy area where your dog can feel secure during their first few days.</p>
          </div>
          <div className="tip-card">
            <img src={dogFood} alt="Healthy Food" />
            <h3>Provide Healthy Food</h3>
            <p>Ensure your dog has access to nutritious food and clean water to keep them healthy and happy.</p>
          </div>
          <div className="tip-card">
            <img src={dogPlay} alt="Playtime" />
            <h3>Play and Interaction</h3>
            <p>Spend time playing and interacting with your dog to help them adjust and bond with you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DogAdoption;
