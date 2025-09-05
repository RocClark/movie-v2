"use client";
import React, { useState, useContext } from "react";
import { TicketReviewContext } from "../context/TicketContext";
import Link from "next/link";

function MovieForm() {
  const { purchaseTicket } = useContext(TicketReviewContext);

  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = () => {
    if (nameOnCard && cardNumber && expirationMonth && expirationYear) {
      purchaseTicket(); // mark ticket as purchased in context
      setFormValid(true);
    } else {
      setFormValid(false);
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
      <h1 className="text-center font-bold text-xl uppercase mb-6">
        Secure payment info
      </h1>

      {/* Name on Card */}
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
        <input
          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder="John Smith"
          type="text"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
        />
      </div>

      {/* Card Number */}
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1">Card number</label>
        <input
          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder="0000 0000 0000 0000"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>

      {/* Expiration Date */}
      <div className="mb-3 -mx-2 flex items-end">
        <div className="px-2 w-2/3">
          <label className="font-bold text-sm mb-2 ml-1">
            Expiration month
          </label>
          <select
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 cursor-pointer"
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
          >
            <option value="">Select month</option>
            {[
              "01 - January",
              "02 - February",
              "03 - March",
              "04 - April",
              "05 - May",
              "06 - June",
              "07 - July",
              "08 - August",
              "09 - September",
              "10 - October",
              "11 - November",
              "12 - December",
            ].map((month, idx) => (
              <option key={idx} value={month.split(" ")[0]}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="px-2 w-1/2">
          <label className="font-bold text-sm mb-2 ml-1">Year</label>
          <select
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 cursor-pointer"
            value={expirationYear}
            onChange={(e) => setExpirationYear(e.target.value)}
          >
            <option value="">Select year</option>
            {[2025, 2026, 2027, 2028, 2029, 2030].map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6">
        <button
          className="w-full px-3 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
          onClick={handleSubmit}
        >
          Submit Payment
        </button>
      </div>

      {/* Confirmation Link */}
      {formValid && (
        <div className="mt-6">
          <Link
            href="/movieHome/confirmation"
            className="block text-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Go to Confirmation
          </Link>
        </div>
      )}
    </div>
  );
}

export default MovieForm;
