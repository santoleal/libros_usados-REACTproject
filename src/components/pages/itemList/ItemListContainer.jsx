import Itemlist from "./ItemList";
import { productos } from "../../../productos";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(productos);
      reject("No se consiguieron productos");
    });
    tarea.then((res) => setItems(res)).catch((error) => alert(error));
  }, []);

  return <Itemlist items={items} />;
};

export default ItemListContainer;
