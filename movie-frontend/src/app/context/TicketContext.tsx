"use client";

import React, { createContext, useState } from "react";

// --- Types ---
type Seat = { seatNumber: string };

type Ticket = {
  movie: string;
  time: string;
  seats: Seat[];
  seatCount: number;
  totalPrice: number;
  purchased: boolean;
};

type TicketContextType = {
  ticket: Ticket;
  pickMovie: (newMovie: string) => void;
  pickTime: (newTime: string) => void;
  selectSeat: (seat: Seat) => void;
  purchaseTicket: () => void;
};

// --- Context ---
export const TicketReviewContext = createContext<TicketContextType>({
  ticket: {
    movie: "no movie selected",
    time: "no time selected",
    seats: [{ seatNumber: "" }],
    seatCount: 0,
    totalPrice: 0,
    purchased: false,
  },
  pickMovie: () => {},
  pickTime: () => {},
  selectSeat: () => {},
  purchaseTicket: () => {},
});

// --- Provider ---
export const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const pricePerSeat = 11;

  const [ticket, setTicket] = useState<Ticket>({
    movie: "no movie selected",
    time: "no time selected",
    seats: [],
    seatCount: 0,
    totalPrice: 0,
    purchased: false,
  });

  const pickMovie = (newMovie: string) => {
    setTicket((prev) => ({ ...prev, movie: newMovie }));
  };

  const pickTime = (newTime: string) => {
    setTicket((prev) => ({ ...prev, time: newTime }));
  };

  const selectSeat = (newSeat: Seat) => {
    setTicket((prev) => {
      const isSeatAlreadySelected = prev.seats.some(
        (seat) => seat.seatNumber === newSeat.seatNumber
      );

      if (isSeatAlreadySelected) {
        const updatedSeats = prev.seats.filter(
          (seat) => seat.seatNumber !== newSeat.seatNumber
        );
        return {
          ...prev,
          seats: updatedSeats,
          seatCount: updatedSeats.length,
          totalPrice: updatedSeats.length * pricePerSeat,
        };
      }

      const newSeats = [...prev.seats, newSeat];
      return {
        ...prev,
        seats: newSeats,
        seatCount: newSeats.length,
        totalPrice: newSeats.length * pricePerSeat,
      };
    });
  };

  const purchaseTicket = () => {
    setTicket((prev) => ({ ...prev, purchased: true }));
  };

  return (
    <TicketReviewContext.Provider
      value={{ ticket, pickMovie, pickTime, selectSeat, purchaseTicket }}
    >
      {children}
    </TicketReviewContext.Provider>
  );
};
