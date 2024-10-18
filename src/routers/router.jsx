import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Localizacao from '../pages/Localizacao';
import NotFound from '../pages/NotFound';
import NosConheca from '../pages/NosConheca';
import CadastroUsuario from '../pages/CadastroUsuario';
import LoginUsuario from '../pages/LoginUsuario';
import BarraCategoriaPrdutos from '../componentes/categoriasProdutos/barraCategoriaProdutos';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BarraCategoriaPrdutos/>} exact />
      <Route path="/localizacao" element={<Localizacao />} />
      <Route path="/nos-conheca" element={<NosConheca />} />
      <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
      <Route path="/loginUsuario" element={<LoginUsuario/>} />
      <Route path="*" element={<NotFound />} />
     
  
    </Routes>
  );
};

export default Router;
