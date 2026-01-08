import CategoryFilter from "@/components/filters/CategoryFilter";
import PriceFilter from "@/components/filters/PriceFilter";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
        <div className="w-64 h-screen bg-[#FAFAFA] p-4">
          <CategoryFilter />
          <PriceFilter />
        </div>

      {/* Main Content */}
      <div className="w-full">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
