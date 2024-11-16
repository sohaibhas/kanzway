import React from "react";

const CartSummary = ({
  cart,
  originalTotal,
  discountedTotal,
  clearCart,
  closeModal,
}) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Cart Summary
          </h2>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700">
            <strong>Original Total:</strong> ${originalTotal.toFixed(2)}
          </p>
          <p className="text-gray-700">
            <strong>Discounted Total:</strong> ${discountedTotal.toFixed(2)}
          </p>
          <div className="mt-4 flex justify-between gap-4">
            {cart.length !== 0 && (
              <button
                onClick={clearCart}
                className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
              >
                Confirm Order
              </button>
            )}
            <button
              onClick={closeModal}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
