import React from "react";
// import Sidebar from "../../components/admin/Sidebar";
import AdoptionRequests from "./AdoptionRequests";
import "../../styles/adminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="content">
        <AdoptionRequests />
      </div>
    </div>
  );
};

export default AdminDashboard;
