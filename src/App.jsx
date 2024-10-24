import { Navbar } from "./components/leyour/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import { Carrito } from "./components/pages/Carrito/Carrito";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";


export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Router path="/" element={<ItemListContainer />} />

        <Router path="/detail" element={<ItemDetail />} />

        <Router path="/cart" element={<Carrito />} />

        <Router path="*" element={<h2>420</h2>} />
      </Routes >
    </BrowserRouter>
  );
}
export default App;
