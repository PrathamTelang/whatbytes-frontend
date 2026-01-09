"use client"
import Sidebar from "@/components/filters/Sidebar";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchText.toLowerCase())
);

  return (
    <div className="flex">
      {/* Sidebar */}
        <Sidebar />

      {/* Main Content */}
      <div className="w-full">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
