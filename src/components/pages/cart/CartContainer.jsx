import { useState } from "react";
import { Cart } from "./Cart";
// Aquí va toda la lódiga, en Cart va lo visual
const CartContainer = () => {
  const [libroSeleccionado, setLibroSeleccionado] = useState({});

  return <Cart />;
};

export default CartContainer;
