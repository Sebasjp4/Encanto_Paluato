from sqlalchemy import Column, Integer, String, Boolean, Numeric, Date, ForeignKey, Enum, Text
from sqlalchemy.orm import relationship
from app.database import Base
import enum

class TipoAdicional(str, enum.Enum):
    Por_Persona = 'Por Persona'
    Por_Reserva = 'Por Reserva'
    Por_Dia = 'Por Día'

class Servicio(Base):
    __tablename__ = "Servicio"
    ID_Plan = Column(Integer, primary_key=True, index=True)
    Nombre = Column(String(100))
    Descripcion = Column(Text)
    Precio_Adultos = Column(Numeric(10, 2))
    Precio_Ninos = Column(Numeric(10, 2))
    Tipo = Column(String(50))
    Full_cabana = Column(Boolean, default=False)
    
