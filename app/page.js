"use client";
import { useState } from "react";
import Image from "next/image";
import { MockData } from "@/MockData/MockData";
import CartSummary from "./components/CartSummary";
import ConfirmationMessage from "./components/ConfirmationMessage";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [productsState, setProductsState] = useState(MockData);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [animatedProductId, setAnimatedProductId] = useState(null);

  const addToCart = (product) => {
    if (product.stock <= 0) return;

    setAnimatedProductId(product.id);
    setTimeout(() => setAnimatedProductId(null), 500);

    const updatedProducts = productsState.map((item) =>
      item.id === product.id ? { ...item, stock: item.stock - 1 } : item
    );
    setProductsState(updatedProducts);

    const existingCartItem = cart.find((item) => item.id === product.id);
    if (existingCartItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const calculateTotal = () => {
    const originalTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    let discount = 0;
    if (originalTotal > 200) discount = 0.15;
    else if (originalTotal > 100) discount = 0.1;
    else if (originalTotal > 50) discount = 0.05;
    return { originalTotal, discountedTotal: originalTotal * (1 - discount) };
  };

  const { originalTotal, discountedTotal } = calculateTotal();

  const clearCart = () => {
    setCart([]);
    setProductsState(MockData);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
    setShowCartModal(false);
  };

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeModal = () => {
    setShowCartModal(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
      {productsState.map((item) => (
        <div
          key={item.id}
          className="flex flex-col cursor-pointer items-start justify-between border border-gray-200 p-4 rounded-md shadow-sm"
        >
          <Image
            src={item.image}
            width={300}
            height={300}
            alt="Item image"
            className="object-cover rounded-lg"
          />
          <div>
            <h2 className="mt-4 text-lg font-semibold">{item.name}</h2>
            <div className="flex gap-4">
              <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
              <p className="text-gray-500">Category: {item.category}</p>
            </div>
            <p className="text-gray-500">Stock: {item.stock}</p>
          </div>
          <button
            onClick={() => addToCart(item)}
            disabled={item.stock <= 0}
            className={`border-2 p-2 rounded-lg float-left ${
              item.stock <= 0
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
            } ${animatedProductId === item.id ? "animate-bounce" : ""}`}
          >
            {item.stock <= 0 ? "Out of Stock" : "ADD TO CART"}
          </button>
        </div>
      ))}

      <button
        onClick={openCartModal}
        className="fixed bottom-8 left-8 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        View Cart
      </button>

      {showCartModal && (
        <CartSummary
          cart={cart}
          originalTotal={originalTotal}
          discountedTotal={discountedTotal}
          clearCart={clearCart}
          closeModal={closeModal}
        />
      )}

      {showConfirmation && <ConfirmationMessage />}
    </div>
  );
}
