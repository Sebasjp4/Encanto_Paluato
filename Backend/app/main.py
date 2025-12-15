from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"mensaje": "¡Backend reconstruido desde cero con éxito!"}

