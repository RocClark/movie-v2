from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import movies, seats

app = FastAPI()

# --- CORS Middleware ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend (Next.js dev server)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Routers ---
app.include_router(movies.router)
app.include_router(seats.router)

@app.get("/")
def root():
    return {"msg": "Backend is running!"}
