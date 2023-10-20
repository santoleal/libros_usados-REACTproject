import { useState } from "react";

import { NavBar } from "./components/layout/navbar/NavBar";
import Footer from "./components/layout/footer/Footer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";

function App() {
  const [count, setCount] = useState(0);
  let nombre = "amigo/a";

  return (
    <>
      <NavBar />
      <ItemListContainer visitante={nombre} />
      <CounterContainer stock={10} />
      <Footer />
    </>
  );
}

export default App;
