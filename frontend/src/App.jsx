import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //if we dont have to use .then method then we will do it by using IIFE

    (async() => {
    const response =  await axios.get('/api/products');
    // console.log(response);
    setProducts(response.data)
    })(); //IIFE

  }, []);

  //defining handledata functionality
  return (
    <>
      <h1>Handling api in react </h1>
      <h2>total number of products: {products.length}</h2>

      {/* <button onClick={handledata}>Get data </button> */}
    </>
  )
}

export default App
