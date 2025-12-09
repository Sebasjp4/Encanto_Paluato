from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# CONEXIÓN: Cambia 'root' y '1234' por tu usuario y contraseña de MySQL
# Estructura: mysql+pymysql://USUARIO:PASSWORD@HOST:PUERTO/NOMBRE_DB
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:pass10@localhost:3306/encanto_paluato"

# El motor que arranca la conexión
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# La sesión que usaremos en cada petición
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# La base para crear modelos (tablas)
Base = declarative_base()

# Dependencia para obtener la DB (se usa en los endpoints)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()