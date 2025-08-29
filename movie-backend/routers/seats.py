from fastapi import APIRouter, HTTPException
from typing import List
from models.seat import Seat
from data.db import seats

router = APIRouter(
    prefix="/seats",
    tags=["seats"]
)

@router.get("/", response_model=List[Seat])
async def get_seats():
    return seats


@router.post("/{seat_id}")
async def reserve_seat(seat_id: int):
    # find seat by ID
    for seat in seats:
        if seat.id == seat_id:
            if seat.seatTaken:
                raise HTTPException(status_code=400, detail="Seat already taken")
            seat.seatTaken = True
            return {"msg": f"Seat {seat.seatNum} reserved successfully!"}
    
    raise HTTPException(status_code=404, detail="Seat not found")
