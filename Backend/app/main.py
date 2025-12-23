from fastapi import FastAPI
from app.routers import infraestructura

app = FastAPI(
    title="API Encanto de Paluato",
    version="0.1.0"
)

# Aquí conectamos tus rutas con la app principal
app.include_router(infraestructura.router)

@app.get("/")
def root():
    return {"mensaje": "Bienvenido al Backend de Encanto de Paluato"}