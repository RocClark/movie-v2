"use client";

import Header from "./components/header";
import MovieList from "./components/movieList";

export default function SelectMovie() {
  // Temporary hardcoded movies
  const movies = [
    {
      id: "1",
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      image: "/images/inception.jpg",
    },
    {
      id: "2",
      title: "The Dark Knight",
      description: "Batman faces off against the Joker in Gotham.",
      image: "/images/dark-knight.jpg",
    },
    {
      id: "3",
      title: "Interstellar",
      description: "Explorers travel through a wormhole in space.",
      image: "/images/interstellar.jpg",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-slate-900">
      <div className="w-full">
        <Header />
      </div>

      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
