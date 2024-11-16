import React from "react";

const ConfirmationMessage = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-lg shadow-md">
      Order confirmed! Cart has been cleared.
    </div>
  );
};

export default ConfirmationMessage;
