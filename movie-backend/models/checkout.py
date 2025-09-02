from pydantic import BaseModel
from typing import List

class CheckoutRequest(BaseModel):
    movie_id: int
    time: str
    seats: List[str]
    card_number: str
    name: str
