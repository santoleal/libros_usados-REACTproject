import { useState } from "react";

import { NavBar } from "./components/layout/navbar/NavBar";
import Footer from "./components/layout/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <h1>Hola!</h1>
      <ItemListContainer />
      <Footer />
    </>
  );
}

export default App;
