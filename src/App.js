import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/Navbar"
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/notification'

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar name="Tienda Coder" />
            <Routes>
              <Route path="/" element={<ItemListContainer greetings={"Listado de Productos"} />}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={''} />} />
              <Route path="/detail/:productId" element={<ItemDetailContainer />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
