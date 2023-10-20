const Counter = ({ sumar, restar, contador }) => {
  return (
    <div>
      <h4>Número de productos: {contador}</h4>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Counter;
