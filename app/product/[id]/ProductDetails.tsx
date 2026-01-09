"use client";

import { useCart } from "@/context/CartContext";

type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-80 h-auto object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl font-semibold">${product.price / 100}</p>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-500">
          Category: {product.category}
        </p>

        <button
          className="mt-4 bg-black cursor-pointer text-white px-4 py-2 rounded hover:bg-black/80 transition"
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: 1,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
