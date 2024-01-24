import React from "react";
import "./styles.css";
const Componente1 = () => {
  const name = "Jose Silva";
  const elemento1 = <>Hello, {name}</>;

  return (
    <>
      <h3> Fatec </h3>
      <p> {elemento1}</p>
    </>
  );
};
export default Componente1
