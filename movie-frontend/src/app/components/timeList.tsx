"use client";
import React from "react";
import TimeItem from "./timeItem";

type Time = {
  id: number;
  title: string; // e.g. "14:00" or "07:30 PM"
};

type TimeListProps = {
  times: Time[];
  movieTitle: string;
};

function TimeList({ times, movieTitle }: TimeListProps) {
  const now = new Date();
  const currentTimeInET = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {times.map((time) => {
        const timeDate = new Date(`1970-01-01T${time.title} EST`);
        const isPast = timeDate < currentTimeInET;

        return (
          <TimeItem
            key={time.id}
            title={time.title}
            isPast={isPast}
            movieTitle={movieTitle}
          />
        );
      })}
    </ul>
  );
}

export default TimeList;
