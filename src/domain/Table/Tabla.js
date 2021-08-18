import React from "react";
const Tabla = ({ titulo, children }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <table>{children}</table>
    </div>
  );
};
export default Tabla;
