import Itemlist from "./ItemList";
import { libros } from "../../../listaLibros";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    const productosFiltrados = libros.filter(
      (libro) => libro.categoryName === categoryName
    );

    const productoParaVenta = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : libros);
      reject("No hay libros para mostrar");
    });
    productoParaVenta
      .then((res) => setItems(res))
      .catch((error) => alert(error));
  }, [categoryName]);

  return <Itemlist items={items} />;
};

export default ItemListContainer;
