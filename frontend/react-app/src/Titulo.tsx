function Titulo() {

    const nombre = "sebas";
    if (nombre) {
        return <h1>Hola {nombre}</h1>;
    }
    return <h1>Hola usuario</h1>;

}
export default Titulo;      