
import './App.css'

import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Components/Products';
import Singleproduct from './Components/Singleproduct';
import Home from './Components/Home';

import Cartitems from './Components/Cartitems';

function App() {
 

  return (
    <>

<BrowserRouter>

<Navbar />
      <Routes>
     
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          <Route path="products" element={<Products  Products = {Products} />} />
          <Route path="cartitems" element={<Cartitems />} />
     <Route path="singleproduct/:id" element={<Singleproduct />} />

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
