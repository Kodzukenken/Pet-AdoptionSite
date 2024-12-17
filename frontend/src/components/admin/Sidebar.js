import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {/* <li>
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </li> */}
        <li>
          <Link to="/admin/pets">
            <i className="fas fa-paw"></i>
            <span>All Pets</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/users">
            <i className="fas fa-users"></i>
            <span>All Users</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/adoption-requests">
            <i className="fas fa-clipboard-list"></i>
            <span>Adoption Requests</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
