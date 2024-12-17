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
// import AdminDashboard from "./pages/admin/AdminDashboard";
import PetList from "./pages/admin/PetList";
import UserList from "./pages/admin/UserList";
import AdoptionRequests from "./pages/admin/AdoptionRequests";
import userAdoptionStatus from './pages/userAdoptionStatus';

function App() {
  return (
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
          <Route path="//user-adoption-status" element={<userAdoptionStatus />} />
        </Routes>
      </div>
      {/* Conditionally render the Footer */}
      {!adminRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
