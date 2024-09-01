import React from "react";
import header from "../header/header.css"
import Menu from "../menu/menu.js";


function Header(props) {

  
  return (
    <header>
      
      <div>
        <img id="logo" src="../assets/icons/logo-mobile.svg" alt="" />
      </div>
      <div>
        <img id="menu-hamburguer" src="../assets/icons/Menu Hamburguer.png" alt="" />
        <input type="text" placeholder={props.textoInput} /> 
        <img id="carrinho" src="../assets/icons/carrinho-icon.svg" alt="" />
      </div>
    </header>
  );
}

export default Header;
