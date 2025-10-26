import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-[80vh] text-center">
    <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
    <p className="text-gray-600 mb-6">Page not found.</p>
    <Link to="/" className="btn btn-primary">Back to Home</Link>
  </div>
);

export default NotFound;
