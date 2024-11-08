import { Navbar } from "./components/leyour/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Carrito } from "./components/pages/Carrito/Carrito";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Checkout from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";


export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoria" element={<ItemListContainer />} />

          <Route path="/cart" element={<Carrito />} />

          <Route path="/detail/:id" element={<ItemDetailContainer />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<h2>420</h2>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
