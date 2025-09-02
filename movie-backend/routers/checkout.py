from fastapi import APIRouter, HTTPException
from models.checkout import CheckoutRequest

router = APIRouter(prefix="/checkout", tags=["checkout"])

@router.post("/")
def checkout(req: CheckoutRequest):
    # Simulated payment
    return {"status": "success", "ticket_id": "abc123", "message": "Payment successful!"}
