import { useState } from "react";

import { NavBar } from "./components/layout/navbar/NavBar";
import Footer from "./components/layout/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);
  let nombre = "amigo/a";

  return (
    <>
      <NavBar />

      <h1></h1>
      <ItemListContainer visitante={nombre} />
      <Footer />
    </>
  );
}

export default App;
