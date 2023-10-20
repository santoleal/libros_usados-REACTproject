import { useState } from "react";

import { NavBar } from "./components/layout/navbar/NavBar";
import Footer from "./components/layout/footer/Footer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
import Home from "./components/pages/home/Home";

function App() {
  const [count, setCount] = useState(0);
  let nombre = "amigo/a";

  return (
    <>
      <NavBar />
      <Home />
      <ItemListContainer />
      <CounterContainer stock={10} />
      <Footer />
    </>
  );
}

export default App;
