import Header from '../componentes/header/header';
import Footer from '../componentes/footer/footer';
import './pagesCSS/localizacao.css';

function Localizacao() {
  return (
    <>
      <Header textoInput="Pesquisar..." />
      <section className="localizacao">
        <h1>Venha nos visitar</h1>
        <p>Aberto de quarta-feira a domingo, das 18:00 às 00:30h</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.295622796691!2d-46.72316072377011!3d-23.449798757504773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefbc5c5487481%3A0xf0e86da1b07bc889!2sR.%20Horma%2C%20158%20-%20Jardim%20Pirituba%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002984-000!5e0!3m2!1spt-BR!2sbr!4v1708622569334!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização no Google Maps"
        ></iframe>
      </section>
      <Footer />
    </>
  );
}

export default Localizacao;
