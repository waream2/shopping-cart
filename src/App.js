import './App.css';
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import Collection from './Components/Collection'
import { CartContext } from './Contexts/CartContext'
import { useState } from 'react'

function App() {
  const [ cart, setCart ] = useState(2)
  const [isHomepage, setIsHomepage ] = useState(true)
  const [isCollection, setIsCollection ] = useState(false)

  return (
    <>
    <CartContext.Provider value={{cart, setCart, isHomepage, setIsHomepage, isCollection, setIsCollection}}>
      <Header />
      <Homepage />
    </CartContext.Provider>
    </>
  );
}

export default App;
