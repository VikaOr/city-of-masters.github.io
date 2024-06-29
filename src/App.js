import { 
  Routes, 
  Route } from 'react-router-dom';
import Prices from './Pages/Prices.jsx';
import Home from './../src/Pages/Main_page.jsx'
import Ceiling from './../src/Pages/Ceiling.jsx'
import Lamps from './../src/Pages/Lamps.jsx'
import Bascket from './Pages/Bascket.jsx';
import { useState } from 'react';


import './App.css';
import { RouterProvider } from 'react-router-dom';
import Header from './components/heder/Header.jsx';



function App() {
  const [chuseElem, setElem] = useState([]);
  let arr =[];
  
  function chuseItem (chuseElem) {
    setElem(chuseElem);
    console.log(chuseElem.length)
    for (let i = 0; i < chuseElem.length; i++) {
      arr.push([chuseElem[i].img, chuseElem[i].price, chuseElem[i].name])
    };
    let leng = arr.length
    for (let i = 0; i < leng-chuseElem.length; i++) {
      arr.shift([chuseElem[i].img, chuseElem[i].price, chuseElem[i].name])
    }
    
    console.log(chuseElem[0].price)
    console.log(arr.length)
  };
  
  
  
  return (
      <Routes>
        <Route path="" element={<Header />}>
          <Route index element={<Home /> } />
          <Route path="" element={<Home />} />
          <Route path="ceiling" element={<Ceiling />} />
          <Route path="prices" element={<Prices />} />
          <Route path="lamps" element={<Lamps chuseElemFunc={chuseItem}/>} />
          <Route path="basket" element={<Bascket products ={arr}/>} />
        </Route>
        
      </Routes>
  );
}


export default App;
