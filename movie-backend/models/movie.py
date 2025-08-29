from pydantic import BaseModel

class Movie(BaseModel):
    id: int
    title: str
    description: str
    image: str
    times: list[str]
