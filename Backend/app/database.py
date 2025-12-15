from sqlalchemy import create_engine # esto es para crear la conexion a la base de datos 
from sqlalchemy.orm import sessionmaker, declarative_base

# CONEXIÓN: Cambia 'root' y 'tu_contraseña' por los tuyos
# Estructura: mysql+pymysql://USUARIO:PASSWORD@HOST:PUERTO/NOMBRE_DB
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:pass10@localhost:3306/encanto_paluato"

# Crear el motor
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Crear la sesión
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base para modelos
Base = declarative_base()

# Función para obtener la DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()