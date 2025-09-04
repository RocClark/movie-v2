"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { TicketReviewContext } from "../context/TicketContext";

function MovieScreen() {
  const { ticket } = useContext(TicketReviewContext);

  return (
    <div className="relative h-96 w-full bg-[#343c40] flex flex-col items-center justify-center py-7">
      {/* Movie title */}
      <h2 className="absolute top-4 text-3xl font-bold text-white z-10">
        🎬{" "}
        {ticket.movie !== "no movie selected" ? ticket.movie : "Select a Movie"}
      </h2>

      {/* Background image */}
      <Image
        src="/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg"
        alt="Theater Image"
        fill
        className="object-cover opacity-80"
        quality={100}
        priority
      />
    </div>
  );
}

export default MovieScreen;
