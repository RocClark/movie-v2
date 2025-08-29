from fastapi import FastAPI
from routers import movies, seats

app = FastAPI()

# Register routers
app.include_router(movies.router)
app.include_router(seats.router)

@app.get("/")
def root():
    return {"msg": "Backend is running!"}
