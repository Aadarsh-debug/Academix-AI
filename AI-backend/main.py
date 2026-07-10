from fastapi import FastAPI
from config.db import SessionLocal

app = FastAPI()

@app.get("/")
def home():
    db = SessionLocal()
    try:
        return {"message": "Connected to Neon PostgreSQL"}
    finally:
        db.close()