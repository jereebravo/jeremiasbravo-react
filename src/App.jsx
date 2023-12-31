import { useState } from 'react'
import './App.css'
import {  NavBar } from'./componentes/NavBar/NavBar'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Checkout } from './componentes/checkout/Checkout'
import { CartContextProvider } from './context/cartContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <CartContextProvider>
    
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer  />} />
      <Route path="/category/:category" element={<ItemListContainer />} />
      <Route path="/Item/:id" element={<ItemDetailContainer />}/>
      <Route path="/cart" element={<Checkout />} />



      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
