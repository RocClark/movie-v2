import React from "react";
import { TicketReviewContext } from "../context/TicketContext";

interface SeatItemProps {
  seatNum: string;
}

function SeatItem({ seatNum }: SeatItemProps) {
  const { ticket, selectSeat } = React.useContext(TicketReviewContext);

  const isSelected = ticket.seats.some((seat) => seat.seatNumber === seatNum);

  const handlePickSeats = () => {
    selectSeat({ seatNumber: seatNum });
  };

  return (
    <li className="mt-3">
      <div
        className={`h-10 w-10 rounded-t-full text-center cursor-pointer border-2 flex items-center justify-center ${
          isSelected
            ? "bg-green-500 border-green-700"
            : "bg-[#33a2d9] border-sky-700"
        }`}
        onClick={handlePickSeats}
      >
        {seatNum}
      </div>
    </li>
  );
}

export default SeatItem;
