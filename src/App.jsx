import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const products = [{name: 'ann', price : 20, quantity : 10 }, {name: 'something', price : 10, quantity: 2}, {name : 'some', price: 20, quantity: 6}]

  const calculateTotalPrice = (price, quantity)=> {
    let total= price * quantity;
    return total;
  }

  function printProductInfo(products){
    return `Product name :${products.name}, Price: ${products.price}, Quantity:${products.quantity} = Total ${calculateTotalPrice(products.price, products.quantity)} `
  }


  return (
    <>

    <p className='p1'>{printProductInfo(products[0])}</p>
    <p className='p2'>{printProductInfo(products[1])}</p>
    <p className='p3'>{printProductInfo(products[2])}</p>

    </>
  )
}

export default App
