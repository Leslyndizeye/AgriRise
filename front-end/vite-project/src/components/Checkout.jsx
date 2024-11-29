import React, { useState, useContext } from "react";
import { ShopContext } from "../pages/Context/ShopContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { FaSpinner } from 'react-icons/fa'; // Import a spinner icon (optional)

const Checkout = () => {
  const { cartItems, all_products, getTotalCartAmount, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate(); // Initialize navigate for redirection
  const [loading, setLoading] = useState(false); // Loading state for "Pay Now" button
  const [paymentMessage, setPaymentMessage] = useState(""); // State to manage payment message

  const calculateTotal = () => {
    return getTotalCartAmount();
  };

  const handlePayment = () => {
    setLoading(true); // Start loading
    setPaymentMessage(""); // Clear any previous messages

    setTimeout(() => {
      setLoading(false); // Stop loading
      setPaymentMessage("Payment functionality coming soon!"); // Show the message after 3 seconds
    }, 3000); // Simulate payment loading time (3 seconds)
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page in history
  };

  return (
    <div className="p-8 max-w-[800px] mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Product Image</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Price (per unit)</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Total</th>
              <th className="py-2 px-4 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products
              .filter((product) => cartItems[product.id] > 0) // Only show items in the cart
              .map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="py-2 px-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="py-2 px-4">{product.name}</td>
                  <td className="py-2 px-4">{product.category || "N/A"}</td>
                  <td className="py-2 px-4">{product.new_price} RWF</td>
                  <td className="py-2 px-4">{cartItems[product.id]}</td>
                  <td className="py-2 px-4">
                    {product.new_price * cartItems[product.id]} RWF
                  </td>
                  <td className="py-2 px-4 text-red-600 cursor-pointer">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Total Amount:</h3>
        <p className="text-lg font-bold">{calculateTotal()} RWF</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Payment</h2>
        <p className="mb-4">Select your preferred payment method:</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded mr-4"
          onClick={handlePayment}
          disabled={loading} // Disable Pay Now button while loading
        >
          {loading ? (
            <FaSpinner className="animate-spin" /> // Show spinner during loading
          ) : (
            "Pay Now"
          )}
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded"
          onClick={handleCancel} // Navigate to previous page when Cancel is clicked
        >
          Cancel
        </button>
      </div>

      {/* Display Payment message after loading */}
      {paymentMessage && (
        <div className="mt-4 text-green-500 font-semibold">
          {paymentMessage}
        </div>
      )}

      {/* MTN Mobile Money Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">MTN Mobile Money Payment</h3>
        <div className="flex items-center space-x-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/640px-New-mtn-logo.jpg"  // Updated logo source
            alt="MTN Logo" 
            className="w-16 h-16"
          />
          <div>
            <p className="font-semibold text-lg">Use the MTN MoMo code below to pay:</p>
            <p className="text-xl font-bold text-green-600">*182*8*1*0008#</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
