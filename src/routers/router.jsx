import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Localizacao from '../pages/Localizacao';
import NotFound from '../pages/NotFound';
import NosConheca from '../pages/NosConheca';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/localizacao" element={<Localizacao />} />
      <Route path="/nos-conheca" element={<NosConheca />} />
      <Route path="*" element={<NotFound />} />
     
  
    </Routes>
  );
};

export default Router;
