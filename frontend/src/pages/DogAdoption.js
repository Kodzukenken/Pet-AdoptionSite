import React, { useRef, useState } from "react";
import "../styles/dogAdoption.css"; // Update stylesheet path
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import safeSpace from "../assets/dogSafeSpace.jpeg";
import healthyFood from "../assets/dogHealthyFood.jpeg";
import playInteract from "../assets/dogPlayInteract.jpeg";

// Replace mock data with dogs
const mockDogs = [
    { id: 1, name: "Buddy", age: 2, breed: "Golden Retriever", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Max", age: 4, breed: "German Shepherd", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Bella", age: 3, breed: "Labrador", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Rocky", age: 1, breed: "Bulldog", image: "https://via.placeholder.com/300" },
    { id: 5, name: "Daisy", age: 5, breed: "Beagle", image: "https://via.placeholder.com/300" },
];

const DogAdoption = () => {
    const sliderRef = useRef(null);
    const [viewAll, setViewAll] = useState(false);

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
                        Looking to welcome a new dog or puppy into your family? 
                    </p>
                    <p>
                        We can help you find the perfect furry friend to match your lifestyle.
                    </p>
                    <p>
                        Whether you're looking for a playful puppy, a loyal senior dog, or a specific breed,
                        there’s a diverse range of adoptable dogs waiting for you. Find your best companion today!
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
                        {mockDogs.map((dog) => (
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
                            <FiChevronLeft />
                        </button>
                        <Slider ref={sliderRef} {...sliderSettings}>
                            {mockDogs.map((dog) => (
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
                            <FiChevronRight />
                        </button>
                    </div>
                )}
            </div>

            <div className="new-dog-section">
                <h2 className="new-dog-title">For Your New Dog</h2>
                <p className="new-dog-description">
                    Bringing a new dog home can be an exciting experience! Here are some essential tips to help you 
                    take care of your new furry friend:
                </p>
                <div className="new-dog-tips">
                    <div className="tip-card">
                        <img src={safeSpace} alt="Safe Space" />
                        <h3>Create a Safe Space</h3>
                        <p>Set up a quiet and cozy area where your dog can feel secure during their first few days.</p>
                    </div>
                    <div className="tip-card">
                        <img src={healthyFood} alt="Healthy Food" />
                        <h3>Provide Healthy Food</h3>
                        <p>Ensure your dog has access to nutritious food and clean water to keep them healthy and happy.</p>
                    </div>
                    <div className="tip-card">
                        <img src={playInteract} alt="Playtime" />
                        <h3>Play and Interaction</h3>
                        <p>Spend time playing and interacting with your dog to help them adjust and bond with you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DogAdoption;
