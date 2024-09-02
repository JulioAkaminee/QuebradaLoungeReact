import React, { useState } from "react";
import './header.css'; // Corrigido para refletir o padrão de importação CSS

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <header>
      <div>
        <img id="logo" src="../assets/icons/logo-mobile.svg" alt="Logo" />
      </div>
      <div>
        <img
          onClick={toggleMenu}
          id="menu-hamburguer"
          src="../assets/icons/Menu Hamburguer.png"
          alt="Menu"
        />
        <input type="text" placeholder={props.textoInput} />
        <img id="carrinho" src="../assets/icons/carrinho-icon.svg" alt="Carrinho" />
      </div>

      {/* Menu */}
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <nav className={`container-menu ${isOpen ? 'open' : ''}`}>
          <div className="menu-area-login">
            <div>
              <div className="user-login-icon">
                <img src="../assets/icons/perfil-icon.svg" alt="Ícone de perfil" />
                <p>Entrar</p>
              </div>
              <img src="../assets/icons/logo-desktop.svg" alt="Logo desktop" />
            </div>
          <button>Promoções</button>
          </div>

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
        <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      </div>
    </header>
  );
}

export default Header;
