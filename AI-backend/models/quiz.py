from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from config.db import Base


class Quiz(Base):
    __tablename__ = "quizzes"

    id = Column(Integer, primary_key=True, index=True)

    resourceId = Column(Integer, nullable=False, index=True)

    difficulty = Column(String, nullable=False)

    totalQuestions = Column(Integer, nullable=False)

    createdAt = Column(DateTime, default=datetime.utcnow)