from fastapi import APIRouter
from typing import List
from models.movie import Movie
from data.db import movies

router = APIRouter(
    prefix="/movies",
    tags=["movies"]
)

@router.get("/", response_model=List[Movie])
async def get_movies():
    return movies

@router.post("/")
async def create_movie():
    return {"msg": "Coming soon!"}
