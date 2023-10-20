import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : alert("Alcanzó cantidad máxima...");
  };

  const restar = () => {
    contador > 0
      ? setContador(contador - 1)
      : console.log("Ya está en cero, no puede seguir quitando...");
  };
  return <Counter sumar={sumar} restar={restar} contador={contador} />;
};

export default CounterContainer;
