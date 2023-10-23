import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { libros } from "../../../listaLibros";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [libroSeleccionado, setLibroSeleccionado] = useState({});

  const { id } = useParams();

  console.log("Esto devuelve un useParanms ID", id);
  useEffect(() => {
    let producto = libros.find((libro) => libro.id === +id);

    const getLibro = new Promise((resolve, reject) => {
      resolve(producto);
    });

    getLibro
      .then((res) => setLibroSeleccionado(res))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(libroSeleccionado);

  const onAdd = (cantidad) => {
    let obj = {
      ...libroSeleccionado,
      quantity: cantidad,
    };
    console.log("este es el producto que se agrega", obj);
  };

  return <ItemDetail libroSelected={libroSeleccionado} onAdd={onAdd} />;
};

export default ItemDetailContainer;
