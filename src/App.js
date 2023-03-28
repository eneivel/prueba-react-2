import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from "./my-context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from "./views/Home";
import Carrito from './views/Carrito';
import Pizza from './views/Pizza.jsx'
import Navbar from './components/Navbar.jsx'


function App() {

  const [pizzas, setPizzas] = useState([])



  const datosPizzas = async () => {
    const endpoint = './pizzas.json'
    const response = await fetch(endpoint)
    const data = await response.json()
    setPizzas(data)
  }

  useEffect(() => {
    datosPizzas()
  }, []);




  const estadoGlobal = { pizzas }

  return (
    <>
      <MyContext.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/pizza/:id' element={<Pizza />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App;