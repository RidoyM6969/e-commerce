import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {

  let cartInfo = useSelector((state)=>state.product.cartItems)
  

  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="py-12">
      <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
      <div className="flex ">
        <Link to="/">
        <h3>Home</h3>
          </Link>
          &gt;
        <h3>Chekout</h3>
      </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Billing and Shipping */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
          {/* Billing Details */}
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Shipping Details */}
          <h3 className="text-xl font-semibold mt-8 mb-4">Shipping Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Shipping Address Line 1"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Shipping Address Line 2"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* Right Section: Order Summary and Payment */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          {/* Order Summary */}
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul>
            {cartInfo.map((item) => (          
            <li className="flex justify-between mb-2">
                <span>{ item.title}</span>
              <span>${item.price * item.qun}</span>
            </li>
            ))}
          </ul>

          {/* Payment Method */}
          <h3 className="text-xl font-semibold mt-8 mb-4">Payment Method</h3>
          <div className="flex flex-col space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                value="credit-card"
                checked={paymentMethod === "credit-card"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              PayPal
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="cash-on-delivery"
                checked={paymentMethod === "cash-on-delivery"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              Cash on Delivery
            </label>
          </div>

          {/* Payment Button */}
          <button className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
            Place Order
          </button>
          <Link to="/cart" className="block mt-4 text-center text-blue-500">
            Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
