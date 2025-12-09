from fastapi import FastAPI
from Backend.FastAPI.database import engine, Base
# Importamos los modelos para que FastAPI "vea" las tablas antes de iniciar
from Backend.FastAPI.models import infraestructura

# ==========================================
# 1. CREACIÓN DE TABLAS (La Magia)
# ==========================================
# Esta línea le dice a Python: "Revisa los archivos de modelos (infraestructura)
# y si falta alguna tabla en MySQL, CRÉALA automáticamente".
Base.metadata.create_all(bind=engine)

# ==========================================
# 2. CONFIGURACIÓN DE LA APP
# ==========================================
app = FastAPI(
    title="API Encanto de Paluato",
    description="Backend de Reservas",
    version="1.0.0"
)

# ==========================================
# 3. RUTAS (Endpoints)
# ==========================================
@app.get("/")
def home():
    return {"mensaje": "¡El sistema backend está online!", "estado": "funcionando"}

# Más adelante aquí agregaremos líneas como:
# app.include_router(reservas.router)
# app.include_router(clientes.router)