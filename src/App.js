import { 
  BrowserRouter, 
  Routes, 
  Route } from 'react-router-dom';
import Main_page from './Pages/Main_page.jsx';
import Prices from './Pages/Prices.jsx';
import logo from './logo.svg';
import Home from './../src/Pages/Main_page.jsx'
import Ceiling from './../src/Pages/Ceiling.jsx'
import Lamps from './../src/Pages/Lamps.jsx'
import Bascket from './Pages/Bascket.jsx';



import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';
import Header from './components/heder/Header.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/city-of-masters.github.io/" element={<Header />}>
          <Route index element={<Home /> } />
          <Route path="/city-of-masters.github.io/" element={<Home />} />
          <Route path="/ceiling" element={<Ceiling />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/lamps" element={<Lamps />} />
          <Route path="/basket" element={<Bascket />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;
