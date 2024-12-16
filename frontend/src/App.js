import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../src/components/footer';
import Home from '../src/pages/home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import CatAdoption from './pages/CatAdoption';
import DogAdoption from './pages/DogAdoption';
import Search from './pages/search';

function App() {
    const currentPath = window.location.pathname;
    // const hideNavbarRoutes = ['/create-account'];
  return (
      <Router>
          <div className="App">
            {/* <Navbar2 />   */}
              <div className="container">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/login" element={<Login />} />
                      <Route path='/create-account' element={<CreateAccount />} />
                      {/* <Route path="/about" element={<About />} />
                      <Route path="/adoption-system" element={<Adopt />} />
                      <Route path="/blog" element={<Blog />} /> */}
                      <Route path="/cat-adoption" element={<CatAdoption />} /> {/* Fixed component usage */}
                      <Route path="/dog-adoption" element={<DogAdoption />} />
                      <Route path="/search" element={<Search />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
