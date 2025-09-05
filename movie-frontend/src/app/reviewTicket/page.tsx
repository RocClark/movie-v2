import MovieReview from "../components/ticketReview";
import Header from "../components/header";
import Link from "next/link";

export default function TicketReview() {
  return (
    <div className="bg-slate-900">
      <Header />
      <div className="flex flex-col min-h-screen items-center justify-center">
        <MovieReview />

        <Link
          href="#"
          className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-white"
        >
          payment
        </Link>
      </div>
    </div>
  );
}
