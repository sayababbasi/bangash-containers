import React from "react";
import ProductCard from "../components/products/ProductCard";
import { productsData } from "../data/productsData";

const Products = () => (
  <section className="container-max py-12">
    <h1 className="text-3xl font-bold text-primary mb-8">Our Products</h1>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {productsData.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </section>
);

export default Products;
