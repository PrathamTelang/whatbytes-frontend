import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Link href={`/product/${product.id}`}>
    <div className="flex flex-col rounded-lg p-4 hover:shadow-md  bg-[#F4F4F4] transition h-fit cursor-pointer">
      <div className="w-full flex justify-center items-center">
        <Image 
      src={product.image} 
      alt={product.title} 
      width={192} 
      height={192} 
      className="mb-4 h-auto object-cover rounded-lg hover:scale-105" 
      />
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="font-medium">${product.price/100}</p>
      </div>
      <button
  className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-black/80 transition"
  onClick={(e) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }}
>
  Add to Cart
</button>
    </div>
    </Link>
  );
}

export default ProductCard;
