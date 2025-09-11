import Header from "../components/header";
import MovieForm from "../components/movieForm"; // Import the MovieForm component
export default function Payment() {
  return (
    <div className="bg-slate-900">
      <Header />
      <div className="flex flex-col min-h-screen items-center justify-center">
        <MovieForm />
      </div>
    </div>
  );
}
