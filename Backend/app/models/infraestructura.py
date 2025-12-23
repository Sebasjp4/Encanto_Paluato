import enum
from sqlalchemy import Column, Integer, String, Enum, DECIMAL, Text, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from app.core.database import Base

# --- ENUMS ---
class EstadoGeneralEnum(str, enum.Enum):
    Excelente = "Excelente"
    Bueno = "Bueno"
    Regular = "Regular"
    Malo = "Malo"
    En_Reparacion = "En Reparacion"

# --- MODELOS ---

class Sede(Base):
    __tablename__ = "sede"

    id_sede = Column("id_sede", Integer, primary_key=True, index=True)
    nombre = Column("nombre", String(100), nullable=False)
    capacidad_total = Column("capacidad_total", Integer)
    estado_general = Column("estado_general", Enum(EstadoGeneralEnum, name="estado_general_enum"), default=EstadoGeneralEnum.Bueno)

    # Relación inversa (Una Sede tiene muchas Habitaciones)
    habitaciones = relationship("Habitacion", back_populates="sede")


class TipoHabitacion(Base):
    __tablename__ = "tipo_habitacion"

    id_tipo = Column("id_tipo", Integer, primary_key=True, index=True)
    nombre = Column("nombre", String(50), nullable=False)
    capacidad = Column("capacidad", Integer, nullable=False)
    precio_base = Column("precio_base", DECIMAL(10, 2), nullable=False)
    descripcion = Column("descripcion", Text)

    # Relación inversa
    habitaciones = relationship("Habitacion", back_populates="tipo")


class Habitacion(Base):
    __tablename__ = "habitacion"

    id_habitacion = Column("id_habitacion", Integer, primary_key=True, index=True)
    numero = Column("numero", String(10), unique=True, nullable=False)
    nombre_comercial = Column("nombre_comercial", String(100))
    
    # LLAVES FORÁNEAS (Conexión con las otras tablas)
    id_tipo = Column("id_tipo", Integer, ForeignKey("tipo_habitacion.id_tipo"), nullable=False)
    id_sede = Column("id_sede", Integer, ForeignKey("sede.id_sede"), nullable=False)
    
    estado = Column("estado", String(20), default='Disponible')

    # RELACIONES (Para acceder a los objetos completos)
    # Esto te permite hacer: mi_habitacion.tipo.nombre
    tipo = relationship("TipoHabitacion", back_populates="habitaciones")
    sede = relationship("Sede", back_populates="habitaciones")