import React from "react";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  add?: boolean;
  del?: boolean;
};

// function Button2({ children, add, del, onClick }: Props) {
//   return (
//     <button type="button" className="btn btn-primary" onClick={onClick}>
//       {add && "Agregar"}
//       {del && "Eliminar"}
//     </button>
//   );
// }
console.log(styles);
function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      type="button"
      className={[styles.Button, styles.padding].join(" ")}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;
