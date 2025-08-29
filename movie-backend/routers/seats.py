from fastapi import APIRouter
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

@router.post("/")
async def reserve_seat(seat_id: int):
    # Placeholder: Later we’ll update seatTaken = True
    return {"msg": f"Reservation for seat {seat_id} coming soon!"}
