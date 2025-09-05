"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { TicketReviewContext } from "../context/TicketContext";

function Confirmation() {
  const { ticket } = useContext(TicketReviewContext);

  return (
    <div className="w-full max-w-md mx-auto bg-white px-6 py-8 rounded-lg shadow-md text-black">
      <h1 className="mb-8 text-3xl text-center font-bold text-gray-800">
        🎉 Ticket Confirmation
      </h1>

      {/* Movie Title */}
      <p className="block border border-gray-200 w-full p-3 rounded mb-4">
        <strong>Movie:</strong> {ticket.movie}
      </p>

      {/* Seats */}
      <div className="block border border-gray-200 w-full p-3 rounded mb-4">
        <strong>Seats:</strong>
        {ticket.seats.length > 0 ? (
          <ul className="list-disc ml-5 mt-2">
            {ticket.seats.map((seat, index) => (
              <li key={index}>{seat.seatNumber}</li>
            ))}
          </ul>
        ) : (
          <span> No seats selected</span>
        )}
      </div>

      {/* Seat Count */}
      <p className="block border border-gray-200 w-full p-3 rounded mb-4">
        <strong>Number of seats:</strong> {ticket.seatCount}
      </p>

      {/* Time */}
      <p className="block border border-gray-200 w-full p-3 rounded mb-4">
        <strong>Showtime:</strong> {ticket.time}
      </p>

      {/* Price */}
      <p className="block border border-gray-200 w-full p-3 rounded mb-4">
        <strong>Total Price:</strong> ${ticket.totalPrice}
      </p>

      {/* Purchased Status */}
      <p className="block border border-gray-200 w-full p-3 rounded mb-6">
        <strong>Status:</strong>{" "}
        {ticket.purchased ? (
          <span className="text-green-600 font-semibold">Purchased ✅</span>
        ) : (
          <span className="text-red-600 font-semibold">Not Purchased ❌</span>
        )}
      </p>

      {/* Back to Home */}
      <Link
        href="/"
        className="block text-center w-full px-4 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
      >
        ⬅ Back to Home Page
      </Link>
    </div>
  );
}

export default Confirmation;
