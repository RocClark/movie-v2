"use client";

import MoiveScreen from "../components/movieScreen";
import SeatList from "../components/movieSeatList";
import Header from "../components/header";
import { useState } from "react";
import Link from "next/link";
import { TicketReviewContext } from "../context/TicketContext";
import { useContext } from "react";

export default function SeatSelect() {
  const { ticket } = useContext(TicketReviewContext);

  // Hardcoded seats for now
  const [seat] = useState([
    { id: 1, seatNum: "A1" },
    { id: 2, seatNum: "A2" },
    { id: 3, seatNum: "A3" },
    { id: 4, seatNum: "A4" },
    { id: 5, seatNum: "A5" },
    { id: 6, seatNum: "B1" },
    { id: 7, seatNum: "B2" },
    { id: 8, seatNum: "B3" },
    { id: 9, seatNum: "B4" },
    { id: 10, seatNum: "B5" },
  ]);

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <MoiveScreen />

      <div className="text-center text-gray-400 mt-2 text-sm">
        Theater background by Geoffrey Moffett (Unsplash)
      </div>

      {/* Seats */}
      {seat.length > 0 ? <SeatList seats={seat} /> : "Loading..."}

      {/* Show selected seats live */}
      <div className="text-center text-white mt-6">
        Selected Seats:{" "}
        {ticket.seats.map((seat) => seat.seatNumber).join(", ") || "None"}
      </div>

      {/* Review Button */}
      <div className="text-center p-8">
        <Link
          href="../reviewTicket"
          className="sm:px-4 lg:px-8 bg-[#33a2d9] text-2xl font-bold tracking-tight text-white rounded-md border-4 border-sky-700"
        >
          Review Your Ticket
        </Link>
      </div>
    </div>
  );
}
