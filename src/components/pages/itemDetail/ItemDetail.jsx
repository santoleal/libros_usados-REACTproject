import { Container } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ libroSelected, onAdd }) => {
  return (
    <Container
      maxWidth="sm"
      style={{ textAlign: "center", padding: "20px 0px", display: "flex" }}
    >
      <Container>
        <img
          src={libroSelected.image}
          alt="Aquí va la imagen"
          style={{ maxWidth: "300px" }}
        />
      </Container>
      <Container>
        <h1> {libroSelected.title} </h1>
        <h3> Área temática: {libroSelected.category}</h3>
        <h2> Precio: {libroSelected.price}</h2>
        <h3> Descripción: {libroSelected.description} </h3>
        <CounterContainer stock={libroSelected.stock} onAdd={onAdd} />
      </Container>
    </Container>
  );
};

export default ItemDetail;
