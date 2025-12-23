from app.core.database import SessionLocal
from app.models.infraestructura import Sede
from sqlalchemy import text

def probar_conexion():
    db = SessionLocal()
    try:
        # 1. Prueba básica de conexión
        db.execute(text("SELECT 1"))
        print("✅ Conexión a Base de Datos: EXITOSA")

        # 2. Prueba de lectura de tu tabla Sede
        # Esto verificará si el modelo coincide con la tabla real
        sedes = db.query(Sede).all()
        print(f"✅ Lectura de tabla Sede: EXITOSA. Se encontraron {len(sedes)} sedes.")
        
        for sede in sedes:
            print(f"   -> ID: {sede.id_sede}, Nombre: {sede.nombre}, Estado: {sede.estado_general}")

    except Exception as e:
        print("❌ ERROR:")
        print(e)
    finally:
        db.close()

if __name__ == "__main__":
    probar_conexion()