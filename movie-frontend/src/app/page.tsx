import MovieItem from "./components/movieItem";

export default function MovieList() {
  const movies = [
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dreams.",
      image: "/inception.jpg",
      times: [
        { id: 1, title: "14:00" },
        { id: 2, title: "16:30" },
        { id: 3, title: "19:00" },
      ],
    },
    {
      title: "Interstellar",
      description: "Explorers travel through a wormhole in space.",
      image: "/interstellar.jpg",
      times: [
        { id: 4, title: "13:00" },
        { id: 5, title: "17:00" },
        { id: 6, title: "20:30" },
      ],
    },
  ];

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
