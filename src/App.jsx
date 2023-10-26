import { useState } from 'react'
import './App.css'
import {  NavBar } from'./componentes/NavBar/NavBar'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <NavBar />
       <ItemListContainer greeting={"Bienvenidos a Mague Osos"}/>
    </>
  )
}

export default App
