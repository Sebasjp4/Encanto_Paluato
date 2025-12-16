import { useState } from "react";

type Props = {
  data: string[];
  onSelect? :(elemento: string) => void; // Función opcional para manejar la selección
};

function List({ data, onSelect }: Props) {
  const[index, setIndex] = useState(0)
  const handleClick = (i:number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento); // Llamar a la función onSelect si está definida
  };

  return (
      <ul className="list-group">
        {data.map((elemento, i) => (
          <li onClick={() => handleClick(i, elemento)} 
            key={elemento} 
            className={`list-group-item ${index === i ? "active" : ""}`}>
            {elemento}
          </li>
        ))}
      </ul>
  );
}

export default List;
