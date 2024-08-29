import React from "react";
import "../menu/menu.css"


function Menu() {
  return (
    <div id="container-menu">
      <div id="menu-area-login">
       <div id="user-login-icon"> <img src="../assets/icons/perfil-icon.svg" alt="" />
        <p>Entrar</p></div>
      <img src="../assets/icons/logo-desktop.svg" alt="" />
      </div>
      <button>Promoções</button>
    </div>
  );
}

export default Menu;
