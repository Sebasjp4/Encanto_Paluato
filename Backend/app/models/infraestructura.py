from sqlalchemy import Column, Integer, String, Boolean, Enum, ForeignKey, DateTime # importamos los tipos de datos necesarios
from sqlalchemy.orm import relationship # para definir relaciones entre tablas 
from app.database import Base # importamos la base declarativa desde database.py 
import enum # para definir enumeraciones

# Enums
class EstadoGeneralSede(str, enum.Enum):
    Activo = 'Activo'
    Mantenimiento = 'Mantenimiento'
    ocupado = 'ocupado'
    maxima_Capacidad = 'maxima_Capacidad'

class EstadoHabitacion(str, enum.Enum):
    Disponible = 'Disponible'
    Ocupada = 'Ocupada'
    Limpieza = 'Limpieza'
    Mantenimiento = 'Mantenimiento'

# Modelos
class Sede(Base):
    __tablename__ = "Sede" # nombre de la tabla
    ID_Sede = Column(Integer, primary_key=True, index=True) # clave primaria
    Nombre = Column(String(100)) # nombre de la sede
    Capacidad_Total = Column(Integer) # capacidad total de la sede
    Estado_General = Column(Enum(EstadoGeneralSede), default=EstadoGeneralSede.Activo) # estado general de la sede
    
    habitaciones = relationship("Habitacion", back_populates="sede") # relacion con Habitacion
    areas = relationship("AreaControl", back_populates="sede") # relacion con AreaControl

class AreaControl(Base): 
    __tablename__ = "Area_Control"
    ID_Area = Column(Integer, primary_key=True, index=True)
    ID_Sede = Column(Integer, ForeignKey("Sede.ID_Sede"))
    Nombre_Area = Column(String(40))
    Estado_Operativo = Column(Boolean, default=True)
    Ultima_Revision = Column(DateTime)

    sede = relationship("Sede", back_populates="areas")
    inventarios = relationship("Inventario", back_populates="area")

class Habitacion(Base):
    __tablename__ = "Habitacion" # nombre de la tabla
    ID_Habitacion = Column(Integer, primary_key=True, index=True) # clave primaria
    ID_Sede = Column(Integer, ForeignKey("Sede.ID_Sede")) # clave foranea a Sede
    Nombre = Column(String(50)) # nombre o numero de la habitacion
    Tipo = Column(String(50)) # tipo de habitacion (simple, doble, suite, etc.)
    Capacidad = Column(Integer) # capacidad de la habitacion
    Estado = Column(Enum(EstadoHabitacion), default=EstadoHabitacion.Disponible) # estado de la habitacion

    sede = relationship("Sede", back_populates="habitaciones") # relacion con Sede
    inventarios = relationship("Inventario", back_populates="habitacion") # relacion con Inventario
    # Relaciones con transacciones se definen en el otro archivo o con strings

class Inventario(Base):
    __tablename__ = "Inventario"
    ID_Item = Column(Integer, primary_key=True, index=True)
    Nombre_Item = Column(String(100))
    Cantidad = Column(Integer, default=1)
    ID_Habitacion = Column(Integer, ForeignKey("Habitacion.ID_Habitacion"), nullable=True)
    ID_Area = Column(Integer, ForeignKey("Area_Control.ID_Area"), nullable=True)

    habitacion = relationship("Habitacion", back_populates="inventarios")
    area = relationship("AreaControl", back_populates="inventarios")