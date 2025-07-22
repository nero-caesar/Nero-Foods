import React from "react";
import "./notfound.css"; // import custom styles

const NotFound: React.FC = () => (
  <div className="notfound-container">
    <h1 className="notfound-title">404 - Page Not Found</h1>
    <p className="notfound-text">The page you are looking for does not exist.</p>
  </div>
);

export default NotFound;
