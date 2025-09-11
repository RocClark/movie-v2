import SeatItem from "./movieSeatItem";

interface Seat {
  id: number;
  seatNum: string;
}

function SeatList({ seats }: { seats: Seat[] }) {
  return (
    <ul className="grid grid-cols-5 gap-2 justify-center mt-6">
      {seats.map((seat) => (
        <SeatItem key={seat.id} seatNum={seat.seatNum} />
      ))}
    </ul>
  );
}

export default SeatList;
