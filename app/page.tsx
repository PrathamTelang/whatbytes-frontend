"use client"
import Sidebar from "@/components/filters/Sidebar";
import ProductGrid from "@/components/product/ProductGrid";
import { useSearch } from "@/context/SearchContext";
import { products } from "@/data/products";

export default function Home() {
  const { searchText, selectedCategory, maxPrice } = useSearch();
  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(searchText.toLowerCase());

  const matchesCategory =
    selectedCategory === "all" ||
    product.category === selectedCategory;

  const matchesPrice = product.price / 100 <= maxPrice;  

  return matchesSearch && matchesCategory && matchesPrice;
});

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
