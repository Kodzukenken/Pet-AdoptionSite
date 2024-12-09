import React, { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import background from "../assets/bg.png";
import video from "../assets/homevideo.mp4";
import aboutus2 from "../assets/aboutus2.jpg";
import aboutus3 from "../assets/aboutus3.jpg";
import aboutus4 from "../assets/aboutus4.jpg";
import aboutus5 from "../assets/aboutus5.jpg";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentPetSlide, setCurrentPetSlide] = useState(0);

    const mockPets = [
        {
            id: 1,
            name: "Abraham",
            gender: "Male",
            age: 2,
            type: "Dog",
            shelter: "Shelter A",
            vaccines: ["Rabies", "Distemper"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 2,
            name: "Bella",
            gender: "Female",
            age: 3,
            type: "Cat",
            shelter: "Shelter B",
            vaccines: ["FVRCP", "Rabies"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 3,
            name: "Charlie",
            gender: "Male",
            age: 1,
            type: "Cat",
            shelter: "Shelter C",
            vaccines: ["Myxomatosis"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 4,
            name: "Daisy",
            gender: "Female",
            age: 4,
            type: "Dog",
            shelter: "Shelter D",
            vaccines: ["Rabies"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 5,
            name: "Ella",
            gender: "Female",
            age: 2,
            type: "Cat",
            shelter: "Shelter E",
            vaccines: ["FVRCP", "Rabies"],
            image: "https://via.placeholder.com/300",    
        },
        {
            id: 6,
            name: "Finn",
            gender: "Male",
            age: 3,
            type: "Rabbit",
            shelter: "Shelter F",
            vaccines: ["Myxomatosis"],
            image: "https://via.placeholder.com/300",    
        },
    ];

    const sliderImages = [aboutus2, aboutus3, aboutus4, aboutus5];
    const petSlideCount = Math.ceil(mockPets.length / 3);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + sliderImages.length) % sliderImages.length
        );
    };

    const nextPetSlide = () => {
        setCurrentPetSlide((prevSlide) => 
            (prevSlide + 1) % (mockPets.length - 4) // Ensure wrapping for 5 pets
        );
    };
    
    const prevPetSlide = () => {
        setCurrentPetSlide((prevSlide) =>
            (prevSlide - 1 + (mockPets.length - 4)) % (mockPets.length - 4)
        );
    };
    

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="home">
            <div className="home__container">
                <div className="home__content">
                    <h1 className="home__title">Pawsitively</h1>
                    <h1 className="home__title2">Pet Adoption</h1>
                    <p className="home__description">
                        We believe that every pet deserves a loving home.
                    </p>
                    <button className="home__button">Adopt a Pet</button>
                </div>
                <div className="home__images">
                    <img src={background} alt="Background" className="home__image background" />
                </div>
                <div className="circle circle--large"></div>
                <div className="circle circle--medium"></div>
                <div className="circle circle--small"></div>
            </div>

            <div className="home__video-container">
                <video className="home__video" controls autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="featured-pets_section">
                <h2 className="featured-pets_title">Featured Pets</h2>
                <div className="featured-pets_carousel">
                    <button
                        className="carousel_arrow carousel_arrow--left"
                        onClick={prevPetSlide}
                    >
                        &#9664;
                    </button>
                    <div className="carousel_track">
                        {mockPets
                            .slice(currentPetSlide, currentPetSlide + 5) 
                            .map((pet) => (
                                <div key={pet.id} className="featured-pet_card">
                                    <img
                                        src={pet.image}
                                        alt={pet.name}
                                        className="featured-pet_image"
                                    />
                                    <h3 className="featured-pet_name">{pet.name}</h3>
                                    <p className="featured-pet_type">Type: {pet.type}</p>
                                    <p className="featured-pet_gender">Gender: {pet.gender}</p>
                                    <p className="featured-pet_age">Age: {pet.age} years</p>
                                    {/* <p className="featured-pet_shelter">Shelter: {pet.shelter}</p>
                                    <div className="featured-pet_vaccines">
                                        <h4>Vaccines:</h4>
                                        <ul>
                                            {pet.vaccines.map((vaccine, index) => (
                                                <li key={index}>{vaccine}</li>
                                            ))}
                                        </ul>
                                    </div> */}
                                    <button className="featured-pet_button">
                                        Adopt {pet.name}
                                    </button>
                                </div>
                            ))}
                    </div>
                    <button
                        className="carousel_arrow carousel_arrow--right"
                        onClick={nextPetSlide}
                    >
                        &#9654;
                    </button>
                </div>
            </div>


            <div className="about_container">
                <div className="about_content">
                    <h1 className="about_title">About Us</h1>
                    <p className="about_description">At Pawsitive, we believe every pet deserves a loving home and every person
                    deserves the joy of unconditional companionship.</p>
                    <p className="about_description">By adopting from Pawsitive, you're not just gaining a loyal companion, you’re
                         joining a community of animal lovers who believe in second chances, endless cuddles, and the incredible bond
                          between humans and pets. Together, we create stories of love, joy, and hope, one adoption at a time.</p>
                </div>
                <div className="about_slider">
                    <button 
                        className="about_slider-arrow about_slider-arrow--left" onClick={prevSlide}>
                        &#9664;
                    </button>
                    <img
                        src={sliderImages[currentSlide]}
                        alt="About Us"
                        className="about_slider-image"
                    />
                    <button className="about_slider-arrow about_slider-arrow--right" onClick={nextSlide}>
                        &#9654;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
