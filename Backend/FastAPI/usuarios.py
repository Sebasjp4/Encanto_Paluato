from fastapi import FastAPI

app = FastAPI()

@app.get("/") # Root endpoint
def read_root(): # Function to handle root endpoint
    return {"Hola usuario"} # Return a simple JSON response
