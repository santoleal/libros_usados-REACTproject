const Counter = ({ sumar, restar, contador, onAdd }) => {
  return (
    <div>
      <h4>Número de productos: {contador}</h4>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
