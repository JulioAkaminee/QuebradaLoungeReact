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
      <span  id="menu-hamburguer" class="material-symbols-outlined" onClick={toggleMenu}>
menu
</span>
        
        <input type="text" placeholder={props.textoInput} />
        <span id="carrinho" class="material-symbols-outlined">
shopping_cart
</span>
      </div>

      {/* Menu */}
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <nav className={`container-menu ${isOpen ? 'open' : ''}`}>
          <div className="menu-area-login">
            <div className="user-login-container">
              <div className="user-login-icon">
                <span class="material-symbols-outlined">person</span>
                <p>Entrar</p>
              </div>
              <img src="../assets/icons/logo-desktop.svg" alt="Logo desktop" />
            </div>
          <button>Promoções</button>
          </div>

          <div className="navigation">
            <ul>
              <li><span class="material-symbols-outlined">home</span> <p>Início</p></li>

              <li><span class="material-symbols-outlined">liquor</span><p>Produtos</p></li>

              <li><span class="material-symbols-outlined">map</span> <p>Localização</p></li>
              <li><span class="material-symbols-outlined">mic_external_on</span><p> Shows</p></li>
              <li><span class="material-symbols-outlined">chat</span><p>Fale Conosco</p></li>
              <li><span class="material-symbols-outlined">info</span> <p>Nos Conheça</p></li>
            </ul>
          </div>
        </nav>
        <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      </div>
    </header>
  );
}

export default Header;
