import React from "react";
import "../menu/menu.css";

function Menu() {
  return (
    <nav className="container-menu">
      <div className="menu-area-login">
        <div className="user-login-icon">
          <img src="../assets/icons/perfil-icon.svg" alt="Ícone de perfil" />
          <p>Entrar</p>
        </div>
        <img src="../assets/icons/logo-desktop.svg" alt="Logo desktop" />
      </div>
      <button>Promoções</button>
      <div className="navigation">
        <ul>
          <li><img src="../assets/icons/inicio-icon.svg" alt="Ícone de Início" /> <p>Início</p></li>
          <li><img src="../assets/icons/produtos-icon-svg.svg" alt="Ícone de Produtos" /> <p>Produtos</p></li>
          <li><img src="../assets/icons/localização-icon-svg.svg" alt="Ícone de Localização" /> <p>Localização</p></li>
          <li><img src="../assets/icons/shows-iocn-svg.svg" alt="Ícone de Shows" /><p> Shows</p></li>
          <li><img src="../assets/icons/faleConosco-icon-svg.svg" alt="Ícone de Fale Conosco" /> <p>Fale Conosco</p></li>
          <li><img src="../assets/icons/nosConheca-icon-svg.svg" alt="Ícone de Nos Conheça" /> <p>Nos Conheça</p></li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
