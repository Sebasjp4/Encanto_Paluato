from sqlalchemy import Column, Integer, String, Enum, ForeignKey
from sqlalchemy.orm import relationship
from Backend.FastAPI.database import Base
import enum

# Definimos las opciones fijas (Enums) para tener CONTROL
class EstadoHabitacion(str, enum.Enum):
    Disponible = "Disponible"
    Ocupada = "Ocupada"
    Limpieza = "Limpieza"
    Mantenimiento = "Mantenimiento"

class TipoHabitacion(str, enum.Enum):
    Suite = "Suite"
    Familiar = "Familiar"
    Pareja = "Pareja"

# Modelo de la Tabla SEDE
class Sede(Base):
    __tablename__ = "Sede"

    ID_Sede = Column(Integer, primary_key=True, index=True)
    Nombre = Column(String(100))
    Capacidad_Total = Column(Integer)
    
    # Relación con habitaciones
    habitaciones = relationship("Habitacion", back_populates="sede")

# Modelo de la Tabla HABITACION
class Habitacion(Base):
    __tablename__ = "Habitacion"

    ID_Habitacion = Column(Integer, primary_key=True, index=True)
    ID_Sede = Column(Integer, ForeignKey("Sede.ID_Sede"))
    Nombre = Column(String(50))
    Tipo = Column(String(50)) # O podrías usar un Enum si quisieras ser estricto
    Capacidad = Column(Integer)
    Estado = Column(Enum(EstadoHabitacion), default=EstadoHabitacion.Disponible)

    # Relación inversa
    sede = relationship("Sede", back_populates="habitaciones")