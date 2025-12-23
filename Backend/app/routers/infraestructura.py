from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.core.database import get_db
from app.models.infraestructura import Sede, TipoHabitacion, Habitacion
from app.schemas.infraestructura_dto import SedeResponse, TipoHabitacionResponse, HabitacionResponse

router = APIRouter(
    prefix="/infraestructura",
    tags=["Infraestructura"]
)

# --- RUTAS DE SEDES ---
@router.get("/sedes", response_model=List[SedeResponse])
def listar_sedes(db: Session = Depends(get_db)):
    return db.query(Sede).all()

# --- RUTAS DE TIPOS DE HABITACIÓN ---
@router.get("/tipos-habitacion", response_model=List[TipoHabitacionResponse])
def listar_tipos(db: Session = Depends(get_db)):
    return db.query(TipoHabitacion).all()

# --- RUTAS DE HABITACIONES ---
@router.get("/habitaciones", response_model=List[HabitacionResponse])
def listar_habitaciones(db: Session = Depends(get_db)):
    # SQLAlchemy hace el "JOIN" automáticamente gracias al relationship
    return db.query(Habitacion).all()