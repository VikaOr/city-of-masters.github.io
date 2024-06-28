import { 
  Routes, 
  Route } from 'react-router-dom';
import Prices from './Pages/Prices.jsx';
import Home from './../src/Pages/Main_page.jsx'
import Ceiling from './../src/Pages/Ceiling.jsx'
import Lamps from './../src/Pages/Lamps.jsx'
import Bascket from './Pages/Bascket.jsx';



import './App.css';
import { RouterProvider } from 'react-router-dom';
import Header from './components/heder/Header.jsx';

function App() {
  return (
      <Routes>
        <Route path="" element={<Header />}>
          <Route index element={<Home /> } />
          <Route path="" element={<Home />} />
          <Route path="ceiling" element={<Ceiling />} />
          <Route path="prices" element={<Prices />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="basket" element={<Bascket />} />
        </Route>
        
      </Routes>
  );
}


export default App;
