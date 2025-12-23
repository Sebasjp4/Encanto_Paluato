from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# 1. Cargar las variables del archivo .env que está en la raíz
load_dotenv()

# 2. Leer la URL de conexión
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# Verificación de seguridad
if not SQLALCHEMY_DATABASE_URL:
    raise ValueError("❌ Error: No se encontró DATABASE_URL en el archivo .env")

# 3. Crear el motor (Engine)
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# 4. Crear la sesión (SessionLocal)
# Esto es lo que usaremos en cada petición para hablar con la DB
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 5. Base para los modelos (ORM)
Base = declarative_base()

# 6. Dependencia (Dependency Injection)
# Esta función se usará en tus rutas para abrir y cerrar la DB automáticamente
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()