from sqlalchemy import Column, Integer, String, Boolean, Date, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from app.database import Base
import enum
from datetime import datetime # <--- USAREMOS ESTO EN LUGAR DE func

class RolUsuario(str, enum.Enum):
    SuperAdmin = 'SuperAdmin'
    Empleado = 'Empleado'

class AdminUsuario(Base):
    __tablename__ = "Admin_Usuarios"
    ID_Usuario = Column(Integer, primary_key=True, index=True)
    Username = Column(String(50), unique=True)
    Password_Hash = Column(String(255))
    Rol = Column(Enum(RolUsuario), default=RolUsuario.Empleado)
    Estado = Column(Boolean, default=True)

class Cliente(Base):
    __tablename__ = "Cliente"
    ID_Cliente = Column(Integer, primary_key=True, index=True)
    Documento = Column(String(20), unique=True)
    Tipo_Documento = Column(String(20))
    Nombre = Column(String(100))
    Email = Column(String(150), unique=True)
    Password_Hash = Column(String(255))
    Telefono = Column(String(20))
    Bloqueo = Column(Boolean, default=False)
    Email_Verificado = Column(Boolean, default=False)

    # Relaciones de seguridad
    verificaciones = relationship("EmailVerification", back_populates="cliente")
    refresh_tokens = relationship("RefreshToken", back_populates="cliente")

class Huesped(Base):
    __tablename__ = "Huesped"
    ID_Huesped = Column(Integer, primary_key=True, index=True)
    Nombre = Column(String(100))
    Documento = Column(String(20))
    Fecha_Nacimiento = Column(Date)

# --- SEGURIDAD ---

class EmailVerification(Base):
    __tablename__ = "Email_Verification"
    ID_Verification = Column(Integer, primary_key=True, index=True)
    ID_Cliente = Column(Integer, ForeignKey("Cliente.ID_Cliente"))
    Token = Column(String(255), unique=True)
    
    # CAMBIO AQUÍ: Usamos datetime.now sin paréntesis (pasamos la función)
    Fecha_Creacion = Column(DateTime, default=datetime.now)
    Fecha_Expiracion = Column(DateTime)
    Verificado = Column(Boolean, default=False)
    
    cliente = relationship("Cliente", back_populates="verificaciones")

class PasswordReset(Base):
    __tablename__ = "Password_Reset"
    ID_Reset = Column(Integer, primary_key=True, index=True)
    Email = Column(String(150))
    Token = Column(String(255), unique=True)
    
    # CAMBIO AQUÍ
    Fecha_Creacion = Column(DateTime, default=datetime.now)
    Fecha_Expiracion = Column(DateTime)
    Usado = Column(Boolean, default=False)

class RefreshToken(Base):
    __tablename__ = "Refresh_Tokens"
    ID_Token = Column(Integer, primary_key=True, index=True)
    ID_Cliente = Column(Integer, ForeignKey("Cliente.ID_Cliente"), nullable=True)
    ID_Usuario = Column(Integer, ForeignKey("Admin_Usuarios.ID_Usuario"), nullable=True)
    Token = Column(String(500), unique=True)
    Fecha_Expiracion = Column(DateTime)
    Revocado = Column(Boolean, default=False)

    cliente = relationship("Cliente", back_populates="refresh_tokens")