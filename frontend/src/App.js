import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from '../src/components/footer';
import Home from '../src/pages/home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import CatAdoption from './pages/CatAdoption';
import DogAdoption from './pages/DogAdoption';
import Search from './pages/search';
<<<<<<< Updated upstream
<<<<<<< HEAD
import UserAdoptionStatus from './pages/userAdoptionStatus';
=======
=======
>>>>>>> Stashed changes
// import AdminDashboard from "./pages/admin/AdminDashboard";
import PetList from "./pages/admin/PetList";
import UserList from "./pages/admin/UserList";
import AdoptionRequests from "./pages/admin/AdoptionRequests";
import UserAdoptionStatus from './pages/UserAdoptionStatus';
<<<<<<< Updated upstream
>>>>>>> 304b5ac7064bb7cb0f86f3c06da5730eef3dc775

function App() {
  return (
<<<<<<< HEAD
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
                      <Route path="/user-adoption-status" element={<UserAdoptionStatus />} />
                  </Routes>
              </div>
              <Footer />
          </div>
      </Router>
=======
=======

function App() {
  return (
>>>>>>> Stashed changes
    <Router>
      <AppContent />
    </Router>
  );
}

// Separate AppContent Component
function AppContent() {
  const location = useLocation();

  // Define routes where the Footer should not be displayed
  const adminRoutes = ["/admin", "/admin/pets", "/admin/users", "/admin/adoption-requests"];

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path="/cat-adoption" element={<CatAdoption />} />
          <Route path="/dog-adoption" element={<DogAdoption />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          <Route path="/admin/pets" element={<PetList />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/adoption-requests" element={<AdoptionRequests />} />
          <Route path="//user-adoption-status" element={<UserAdoptionStatus />} />
        </Routes>
      </div>
      {/* Conditionally render the Footer */}
      {!adminRoutes.includes(location.pathname) && <Footer />}
    </div>
<<<<<<< Updated upstream
>>>>>>> 304b5ac7064bb7cb0f86f3c06da5730eef3dc775
=======
>>>>>>> Stashed changes
  );
}

export default App;
