import Sidebar from "@/components/filters/Sidebar";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
        <Sidebar />

      {/* Main Content */}
      <div className="w-full">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
