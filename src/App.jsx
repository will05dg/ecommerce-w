import { Navbar } from "./components/leyour/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Carrito } from "./components/pages/Carrito/Carrito";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";


export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/detail" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Carrito />} />

        <Route path="*" element={<h2>420</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
