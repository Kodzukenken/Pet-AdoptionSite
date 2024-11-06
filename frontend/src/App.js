import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Adjust the path if needed

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Define routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/location" element={<Location />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </Router>
  );
}

// Example components for each route
const Home = () => <h2>Home Page</h2>;
const News = () => <h2>News Page</h2>;
const AboutUs = () => <h2>About Us Page</h2>;
const Favorite = () => <h2>Favorite Page</h2>;
const Location = () => <h2>Location Page</h2>;
const GetStarted = () => <h2>Get Started Page</h2>;

export default App;
