import './App.css';
import Home from './components/home/Home.jsx';
import Navbar from './components/Navbar';
// import Details from './components/Details';
import { HashRouter, Routes, Route } from "react-router-dom";
import Wiki from './components/wiki/Wiki';
import MyContext from "./context/MyContext";
import { useState } from 'react';
import Shop from './components/shop/Shop';
import Cart from './components/shop/Cart';
import Tk from './components/wiki/tk/Tk';
import Guild from './components/guild/Guild.jsx';

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language'));

  return (
    <>
    <MyContext.Provider
        value={{
          language: language,
        }}
      >
          <HashRouter >
        <Navbar setLanguage={setLanguage}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guild" element={<Guild />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/wiki/tk" element={<Tk />} />
        </Routes>
      </HashRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;