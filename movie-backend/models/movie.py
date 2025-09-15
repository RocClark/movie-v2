from pydantic import BaseModel
from typing import List

class Time(BaseModel):
    id: int
    title: str

class Movie(BaseModel):
    id: int
    title: str
    description: str
    image: str
    times: List[Time]
