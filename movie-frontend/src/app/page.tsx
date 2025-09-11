"use client";
import React, { useEffect, useState } from "react";
import MovieItem from "./components/movieItem";

type Movie = {
  title: string;
  description: string;
  image: string;
  times: { id: number; title: string }[];
};

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("http://localhost:8000/movies"); // adjust URL for backend
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p className="text-white">Loading movies...</p>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {movies.map((movie) => (
        <MovieItem
          key={movie.title}
          title={movie.title}
          description={movie.description}
          image={movie.image}
          times={movie.times}
        />
      ))}
    </ul>
  );
}
