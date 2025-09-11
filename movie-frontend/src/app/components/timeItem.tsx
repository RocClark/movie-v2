"use client";
import React from "react";
import Link from "next/link";
import { TicketReviewContext } from "../context/TicketContext";

type TimeItemProps = {
  title: string;
  isPast: boolean;
  movieTitle: string;
};

function TimeItem({ title, isPast, movieTitle }: TimeItemProps) {
  const { pickMovie, pickTime } = React.useContext(TicketReviewContext);

  const handlePickTime = () => {
    if (!isPast) {
      pickMovie(movieTitle);
      pickTime(title);
    }
  };

  return (
    <li
      className={`p-6 m-3 rounded-xl flex flex-col justify-center items-center w-full md:w-72 h-32 ${
        isPast
          ? "border-4 border-gray-300 text-gray-500 cursor-not-allowed bg-white"
          : "border-4 border-gray-300 bg-black"
      }`}
    >
      <Link
        href={isPast ? "#" : "../seatSelect"}
        className={`p-4 w-full h-full rounded-xl flex items-center justify-center text-2xl text-center font-bold ${
          isPast ? "text-gray-500" : "text-white"
        }`}
        onClick={(e) => {
          if (isPast) {
            e.preventDefault();
          } else {
            handlePickTime();
          }
        }}
      >
        {title}
      </Link>
    </li>
  );
}

export default TimeItem;
