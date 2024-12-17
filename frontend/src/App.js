import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from '../src/components/footer';
import Home from '../src/pages/home';
import LandingPage from './pages/landing-page';
import CatAdoption from './pages/CatAdoption';
import DogAdoption from './pages/DogAdoption';
import Search from './pages/search';
// import AdminDashboard from "./pages/admin/AdminDashboard";
import PetList from "./pages/admin/PetList";
import UserList from "./pages/admin/UserList";
import AdoptionRequests from "./pages/admin/AdoptionRequests";
import userAdoptionStatus from './pages/userAdoptionStatus';

import{
  HOME,
  USERDASH,
  SEARCH,
  LANDING_PAGE,
  CATS_PAGE,
  DOGS_PAGE,
  PETLIST,
  USERLIST,
  ADOPTREQLIST,
  USERADOPTSTAT,
  adminRoutes
} from './constants/routes';

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

// Routes defined in /constants/
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={LANDING_PAGE} element={<LandingPage />} />
          <Route path={CATS_PAGE} element={<CatAdoption />} />
          <Route path={DOGS_PAGE} element={<DogAdoption />} />
          <Route path={SEARCH} element={<Search />} />

          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          <Route path={PETLIST} element={<PetList />} />
          <Route path={USERLIST}element={<UserList />} />
          <Route path={ADOPTREQLIST} element={<AdoptionRequests />} />
          <Route path={USERADOPTSTAT}element={<userAdoptionStatus />} />
        </Routes>
      </div>
      {/* Conditionally render the Footer */}
      {!adminRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
