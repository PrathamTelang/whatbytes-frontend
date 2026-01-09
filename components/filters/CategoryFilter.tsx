"use client";
import React from "react";
import { useSearch } from "@/context/SearchContext";

function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useSearch();

  return (
    <div>
      <h2 className="text-md font-semibold mb-6">Category</h2>

      {[
        { label: "All", value: "all" },
        { label: "Electronics", value: "electronics" },
        { label: "Footwear", value: "footwear" },
        { label: "Clothing", value: "clothing" },
        { label: "Accessories", value: "accessories" },
      ].map((category) => (
        <label
          key={category.value}
          className="flex items-center gap-4 pb-4 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selectedCategory === category.value}
            onChange={() => setSelectedCategory(category.value)}
            className="scale-150"
          />
          {category.label}
        </label>
      ))}
    </div>
  );
}

export default CategoryFilter;
