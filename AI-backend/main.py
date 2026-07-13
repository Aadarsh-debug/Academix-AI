from contextlib import asynccontextmanager
from fastapi import FastAPI

from config.db import client, db


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.mongodb_client = client
    app.database = db

    print("Connected to MongoDB")

    yield

    client.close()
    print("MongoDB connection closed")


app = FastAPI(lifespan=lifespan)


@app.get("/")
async def home():
    return {"message": "Connected to MongoDB"}