"use client";

import MoiveScreen from "../components/movieScreen";
import SeatList from "../components/movieSeatList";
import Header from "../components/header";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { TicketReviewContext } from "../context/TicketContext";

type Seat = {
  id: number;
  seatNum: string;
  isBooked?: boolean;
};

export default function SeatSelect() {
  const { ticket } = useContext(TicketReviewContext);
  const [seats, setSeats] = useState<Seat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const res = await fetch("http://localhost:8000/seats");
        if (!res.ok) throw new Error("Failed to fetch seats");
        const data = await res.json();
        setSeats(data);
      } catch (error) {
        console.error("Error fetching seats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <MoiveScreen />

      <div className="text-center text-gray-400 mt-2 text-sm">
        Theater background by Geoffrey Moffett (Unsplash)
      </div>

      {/* Seats */}
      {loading ? (
        <p className="text-center text-white mt-6">Loading seats...</p>
      ) : seats.length > 0 ? (
        <SeatList seats={seats} />
      ) : (
        <p className="text-center text-white mt-6">No seats available.</p>
      )}

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
