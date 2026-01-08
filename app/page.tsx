import CategoryFilter from "@/components/filters/CategoryFilter";
import PriceFilter from "@/components/filters/PriceFilter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Sidebar */}
        <div className="w-64 h-screen bg-[#FAFAFA] p-4">
          <CategoryFilter />
          <PriceFilter />
        </div>

      {/* Main Content */}
      
    </div>
  );
}
