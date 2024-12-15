import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import Home from '../src/pages/home';
import search from '../src/pages/search';



function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <div className="container">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      {/* <Route path="/about" element={<About />} />
                      <Route path="/adoption-system" element={<Adopt />} />
                      <Route path="/blog" element={<Blog />} /> */}
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
}


export default App;
