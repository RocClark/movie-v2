from pydantic import BaseModel

class Seat(BaseModel):
    id: int
    seatNum: str
    seatTaken: bool
