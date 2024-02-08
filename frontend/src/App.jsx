import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import customReactQuery from './customReactQuery'

function App() {
  
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false); //best practice is take error in state and we can talk this about in interview -- one of the edge cases
  // const [loading, setLoading] = useState(false); // edge case when request is made and we are showing user loading that data is loading and it wil take time.

  // useEffect(() => {
  //   //if we dont have to use .then method then we will do it by using IIFE

  //   try {
  //     setLoading(true);
  //     setError(false); //if we again fetch the data then we have to set error false.
  //     ;(async() => { // just for saftey ppurpose we use semicolon (;) as IIFE is tricky to use it means all the previous work is done and new IIFE start
  //     const response =  await axios.get('/api/products');
  //     console.log(response.data);
  //     setProducts(response.data);
  //     setLoading(false);
  //     })(); //IIFE
  //   } catch (error) {
  //     setError(true);
  //     setLoading(false);
  //   }

  // }, []);


  //Modifiedf code
// using custom react query
const {products, loading, error} = customReactQuery('/api/products');

//handling error
// if(error) {
//  return <h1>Something went wrong!!</h1>
// }

// // handlling loading
// if(loading) {
//   return <h1>Loading....</h1>
// }

  //defining handledata functionality
  return (
    <>
    {/* condtional rending  */}
      {loading && <h1>Loading... </h1>}
      {error && <h1>Something went wrong.</h1>}

      
      <h1>Handling api in react </h1>
      <h2>total number of products: {products.length}</h2>

      {/* <button onClick={handledata}>Get data </button> */}
    </>
  )
}

export default App
