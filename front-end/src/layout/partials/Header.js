// Header.js
import React from 'react';
import './partials.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <ResponsiveLink to="/dashboard">Dashboard</ResponsiveLink>
        <ResponsiveLink to="/tickets">Tickets</ResponsiveLink>
        <ResponsiveLink to="/">Logout</ResponsiveLink>
      </div>
    </nav>
  );
};

const ResponsiveLink = ({ to, children }) => {
  return (
    <Link to={to}>{children}</Link>
  );
};

export default Header;
