import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import DetailProduct from "./pages/DetailProduct";
import Carts from "./pages/Carts";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carts' element={<Carts/>}/>
        <Route path='/product/:id' element={<DetailProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
