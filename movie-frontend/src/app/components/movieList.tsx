import MovieItem from "./movieItem";

interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  times: { id: number; title: string }[];
}

interface MovieListProps {
  movies: Movie[];
}

function MovieList(props: MovieListProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {props.movies.map((movie: Movie) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          description={movie.description}
          image={movie.image}
          times={movie.times}
        />
      ))}
    </ul>
  );
}

export default MovieList;
