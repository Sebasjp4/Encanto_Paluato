import Card from "./components/Card.tsx";
import List from "./components/List.tsx";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["sebas 1"]);

  // const [isLoaded, setIsLoaded] = useState(false);

  // const handleClick = () => {
  //   setIsLoaded(!isLoaded);
  // };

  // const list: string[] = ["sebas 1"];

  // const handleAdd = () => {
  //   console.log("Agregar elemento");
  //   list.push("minion");
  // };

  // const handleDel = () => {
  //   console.log("Eliminar elemento");
  //   list.pop();
  // };

  // const handleSelect = (elemento: string) => {
  //   console.log("Seleccionado:", elemento);
  // };

  // const contenido = list.length ? (
  //   <List data={list} onSelect={handleSelect} />
  // ) : (
  //   <p>No hay elementos para mostrar</p>
  // );

  // return (
  //   <Card>
  //     <CardBody title="Hola " text="Este es un texto de ejemplo."></CardBody>
  //     {contenido}

  //     <Button isLoading={isLoaded} onClick={handleClick}>
  //       {isLoaded ? "Cargando..." : "Hola Mundo"}
  //     </Button>

  //     <Button onClick={handleAdd} add>
  //       Agregar
  //     </Button>
  //     <Button onClick={handleDel} del>
  //       Eliminar
  //     </Button>
  //   </Card>
  // );
  const adder = () => {
    setData([...data, `sebas ${data.length + 1}`]);
  };

  const del = () => {
    setData(data.slice(0, -1));
  };
  return (
    <Card>
      <Button onClick={adder}>Agregar</Button>
      <Button onClick={del}>Eliminar</Button>

      <List data={data} />
    </Card>
  );
}

export default App;
