import React from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

export default function EwsNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">EWS Dashboard</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMain"
          aria-controls="navMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students">Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/risk-report">Risk Report</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/interventions">Interventions</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center text-white">
            <Avatar sx={{ width: 36, height: 36, bgcolor: '#1976d2', mr: 2 }}>MK</Avatar>
            <div className="d-none d-sm-block">Mentor: Mr. Kumar</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
