"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TicketReviewContext } from "../context/TicketContext";

type MovieItemProps = {
  title: string;
  description: string;
  image: string;
};

function MovieItem({ title, description, image }: MovieItemProps) {
  const { pickMovie } = React.useContext(TicketReviewContext);
  const [showPopup, setShowPopup] = useState(false);

  const handlePickMovie = () => {
    pickMovie(title); // Store selected movie in context
  };

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <li className="p-4 m-4 rounded-xl bg-slate-400 relative">
      <div>
        <h3 className="font-serif text-2xl text-center">{title}</h3>
      </div>

      {/* Movie Poster */}
      <div className="flex justify-center items-center">
        <Image
          src={image}
          alt={`${title} poster`}
          width={200}
          height={300}
          className="[15rem] w-72 m-5 rounded-md border-4 border-sky-700 cursor-pointer"
          onClick={togglePopup}
        />
      </div>

      {/* Link to select time */}
      <div className="text-center">
        <Link
          href="../seatSelect"
          className="sm:px-4 lg:px-8 font-serif text-2xl text-center text-white"
          onClick={handlePickMovie}
        >
          Pick a Time
        </Link>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="mb-4 text-black">{description}</p>

            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default MovieItem;
