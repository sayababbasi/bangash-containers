import React from "react";
import { productsData } from "../../data/productsData";
import ProductCard from "../products/ProductCard";

const ProductsShowcase = () => (
  <section className="bg-gray-50 py-12">
    <div className="container-max">
      <h2 className="text-2xl font-bold text-primary mb-8 text-center">Our Featured Products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductsShowcase;
