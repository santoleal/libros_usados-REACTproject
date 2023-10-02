import React from "react";
import CartWidget from "../../common/cartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav>
      <h4>Logo</h4>
      <ul>
        <li>Quiénes somos</li>
        <li>Tipo de libros</li>
        <li>Ofrece tus libros</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export const greeting = () => {
  return "Hola, machucao!";
};
