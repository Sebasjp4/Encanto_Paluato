from pydantic import BaseModel
from typing import Optional
from app.models.infraestructura import EstadoGeneralEnum

# --- SEDE ---
class SedeBase(BaseModel):
    nombre: str
    capacidad_total: int
    estado_general: EstadoGeneralEnum

class SedeResponse(SedeBase):
    id_sede: int
    class Config:
        from_attributes = True

# --- TIPO HABITACIÓN ---
class TipoHabitacionBase(BaseModel):
    nombre: str
    capacidad: int
    precio_base: float
    descripcion: Optional[str] = None

class TipoHabitacionResponse(TipoHabitacionBase):
    id_tipo: int
    class Config:
        from_attributes = True

# --- HABITACIÓN ---
class HabitacionBase(BaseModel):
    numero: str
    nombre_comercial: Optional[str] = None
    id_tipo: int
    id_sede: int
    estado: str

# Esta es la respuesta "bonita" que enviaremos al frontend
class HabitacionResponse(HabitacionBase):
    id_habitacion: int
    
    # Aquí anidamos el objeto Tipo para mostrar detalles (no solo el ID)
    tipo: Optional[TipoHabitacionResponse] = None
    
    class Config:
        from_attributes = True