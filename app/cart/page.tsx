"use client";

import { useCart } from "@/context/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";


export default function CartPage() {
  const {
  cartItems,
  increaseQty,
  decreaseQty,
  removeFromCart,
} = useCart();

const totalItems = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);

const totalPrice = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  

  if (cartItems.length === 0) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="text-gray-500 mt-2">
          Add some products to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="p-10 w-full">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="flex w-full gap-4">
        <div className="space-y-6 w-full">
        {cartItems.map((item) => (
  <div
    key={item.id}
    className="flex items-center justify-between border-b border-gray-300 p-4 "
  >
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover rounded"
      />

      <div>
        <h2 className="font-semibold">{item.title}</h2>
        <p className="text-sm text-gray-500">
          ${item.price / 100}
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center gap-10">
      {/* Quantity Controls */}
      <select
        value={item.quantity}
        onChange={(e) => {
          const newQty = parseInt(e.target.value);
          if (newQty > item.quantity) {
            for (let i = 0; i < newQty - item.quantity; i++) {
              increaseQty(item.id);
            }
          } else if (newQty < item.quantity) {
            for (let i = 0; i < item.quantity - newQty; i++) {
              decreaseQty(item.id);
            }
          }
        }}
        className="border border-gray-300 rounded px-3 py-1 font-medium cursor-pointer focus:bg-none"
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

    {/* Remove */}
    <button
      onClick={() => removeFromCart(item.id)}
      className="text-gray-400 hover:text-gray-700 cursor-pointer text-2xl"
    >
      <RiDeleteBinLine />
    </button>
    </div>
    
  </div>
))}

      </div>
      <div className="mt-10 flex justify-end">
  <div className="w-80 p-6 space-y-4 bg-[#FAFAFA]">
    <div className="flex justify-between">
      <span className="font-medium">Total Items</span>
      <span>{totalItems}</span>
    </div>

    <div className="flex justify-between text-lg font-semibold">
      <span>Total Price</span>
      <span>${totalPrice / 100}</span>
    </div>

    <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-black/90 transition cursor-pointer">
      Checkout
    </button>
    <button onClick={() => (window.location.href = '/')} className="w-full  py-2 rounded border-2 border-gray-400 transition cursor-pointer">
      Continue Shopping
    </button>
  </div>
</div>

      </div>
    </div>
  );
}
