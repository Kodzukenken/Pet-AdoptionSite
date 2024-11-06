import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Adopt from './pages/adoption-system';
import Blog from './pages/blog';
// import Services from './pages/services';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Define routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adoption-system" element={<Adopt />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

// Example components for each route
// const Home = () => <h2>Home Page</h2>;
// const News = () => <h2>News Page</h2>;
// const AboutUs = () => <h2>About Us Page</h2>;
// const Favorite = () => <h2>Favorite Page</h2>;
// const Location = () => <h2>Location Page</h2>;
// const GetStarted = () => <h2>Get Started Page</h2>;

export default App;
