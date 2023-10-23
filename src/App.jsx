import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@mui/icons-material";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import Footer from "./components/layout/footer/Footer";
import { NavBarContainer } from "./components/layout/navbar/NavBarContainer";
import Cart from "./components/pages/cart/Cart";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/tematica/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/detalles/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
        </Route>
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
