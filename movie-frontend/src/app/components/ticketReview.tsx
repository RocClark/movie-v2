"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { TicketReviewContext } from "../context/TicketContext";

function MovieReview() {
  const { ticket } = useContext(TicketReviewContext);

  return (
    <div className="bg-slate-800 text-white rounded-xl shadow-lg w-full max-w-md mx-auto p-6">
      <h1 className="mb-6 text-3xl text-center font-bold">🎟️ Ticket Review</h1>

      {/* Selected Movie */}
      <div className="mb-4 p-3 border border-slate-600 rounded">
        <strong>Movie:</strong> {ticket.movie}
      </div>

      {/* Selected Time */}
      <div className="mb-4 p-3 border border-slate-600 rounded">
        <strong>Time:</strong>{" "}
        {ticket.time !== "no time selected" ? ticket.time : "Not selected"}
      </div>

      {/* Selected Seats */}
      <div className="mb-4 p-3 border border-slate-600 rounded">
        <strong>Seats:</strong>{" "}
        {ticket.seats.length > 0 ? (
          <ul className="list-disc ml-5">
            {ticket.seats.map((seat, index) => (
              <li key={index}>{seat.seatNumber}</li>
            ))}
          </ul>
        ) : (
          <span>No seats selected</span>
        )}
      </div>

      {/* Seat Count */}
      <div className="mb-4 p-3 border border-slate-600 rounded">
        <strong>Seat Count:</strong> {ticket.seatCount}
      </div>

      {/* Price */}
      <div className="mb-6 p-3 border border-slate-600 rounded">
        <strong>Total Price:</strong> ${ticket.totalPrice}
      </div>

      {/* Payment Button */}
      <div className="text-center">
        <Link
          href="../payment"
          className="px-6 py-2 bg-[#33a2d9] hover:bg-sky-600 transition text-xl font-bold tracking-tight text-white rounded-md border-2 border-sky-700"
        >
          Buy your Ticket
        </Link>
      </div>
    </div>
  );
}

export default MovieReview;
