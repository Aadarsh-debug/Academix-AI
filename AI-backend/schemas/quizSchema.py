from datetime import datetime

from pydantic import BaseModel


class QuizBase(BaseModel):
    resourceId: int
    difficulty: str
    totalQuestions: int


class QuizCreate(QuizBase):
    pass


class QuizResponse(QuizBase):
    id: int
    createdAt: datetime

    class Config:
        fromAttributes = True