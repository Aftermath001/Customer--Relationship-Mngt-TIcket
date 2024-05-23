// BreadCrumbs.js
import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumbs.css'; // Import custom CSS

const BreadCrumbs = ({ page }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumb-link">Home</Link> / <span className="breadcrumb-current">{page}</span>
    </div>
  );
};

export default BreadCrumbs;
