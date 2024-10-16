import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Localizacao from '../pages/Localizacao';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/localizacao" element={<Localizacao />} />
     
  
    </Routes>
  );
};

export default Router;
