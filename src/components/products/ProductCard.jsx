import React from "react";

const ProductCard = ({ product }) => (
  <div className="card hover:shadow-md transition p-4 text-center">
    <img src={product.image} alt={product.name} className="img-cover mb-4 rounded" />
    <h3 className="font-semibold text-lg text-primary mb-2">{product.name}</h3>
    <p className="text-gray-600 text-sm">{product.description}</p>
  </div>
);

export default ProductCard;
