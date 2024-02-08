import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
// import customReactQuery from './customReactQuery'

function App() {


  //state for search field
  const[search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false); //best practice is take error in state and we can talk this about in interview -- one of the edge cases
  const [loading, setLoading] = useState(false); // edge case when request is made and we are showing user loading that data is loading and it wil take time.

  useEffect(() => {

    //learning abort controller >> abort controller purani request ko apne app cancel kr deta hai. and it send them in packets
    //this code is writte to avoid race condition, to cancel the request we have to study debounce
    const controller = new AbortController();

    //if we dont have to use .then method then we will do it by using IIFE

    try {
      setLoading(true);
      setError(false); //if we again fetch the data then we have to set error false.
      ;(async() => { // just for saftey ppurpose we use semicolon (;) as IIFE is tricky to use it means all the previous work is done and new IIFE start
        //axios.get method recive one more parameter which is config and bekow we are passing object which has signal to cancel old request.
      const response =  await axios.get('/api/products?search=' + search, {
        signal: controller.signal,
      });
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
      })(); //IIFE
    } catch (error) {
      //signal purani request ko cancel krta hai and usko iss catch block  mei send krta hai so we can handle like this
      //we are justy handling axios cancel request in below code
      if(axios.isCancel(error)){
        console.log('Request Cancelled', error.message);
        return;
      }
      setError(true);
      setLoading(false);
    }

    //return methiod or cleanup method >> it used in useEffect >> event handler ka unmount ka kaam return mei hota hai
    //cleanup code below
    return () => {
      controller.abort(); //jb kaaam ho gya hai to controller ko abort krdo
    }

  }, [search]);


  //Modified code
// using custom react query
// const {products, loading, error} = customReactQuery('/api/products?search=' + search);

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
      {/* adding input field  */}
      <input 
      type='text'
       placeholder='search' 
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       />
      <h2>total number of products: {products.length}</h2>

      {/* <button onClick={handledata}>Get data </button> */}
    </>
  )
}

export default App
