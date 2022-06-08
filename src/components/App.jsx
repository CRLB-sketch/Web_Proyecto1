import React from 'react'

// -> Importar componentes
import Wrapper from './Wrapper.jsx'
import GamesAvaliable from './GamesAvaliable.jsx'
import GamesNew from './GamesNew.jsx'
import Notices from './Notices.jsx'
import Help from './Help.jsx'
import Footer from './Footer.jsx'

// -> Imagenes principales
import NSports from '../img/SportsBackground.avif'
import Esrb_plus_10 from '../img/es-e10.svg'

// -> Imagenes para mostrar más información sobre Nintendo Switch
import GameStore from '../img/Game_Store_Switch_Games.png'
import Consoles from '../img/2296x680_ExploreGamingSystems_ES.avif'

import '../css/styles.css'
import '../css/footer.css'

const simbol1 = '>'

const App = ({}) => {
  return (
    <div>
      <Wrapper />
      <img
        src={NSports}
        alt="Nintendo Switch Sports"
        className="img-responsive"
      ></img>

      <div className="more-information">
        <div className="center-stage-header constrained flex padding-y-1 align-items-center justify-content-center">
          <h1 className="h2 margin-0">Ya disponible</h1>
          <div className="div-space1"></div>
          <button className="btn-background">
            <span className="btn-background-text">
              Más información {simbol1}{' '}
            </span>
          </button>
          <div className="div-space2"></div>
          <img className="img-esrb" src={Esrb_plus_10} alt="ESRB +10"></img>
          <div className="descriptors">
            <span>Violencia moderada</span>
            <hr className="small-bar"></hr>
            <span>Compras dentro del juego, Interacción de usuarios</span>
          </div>
        </div>
      </div>

      <hr className="bar-gray"></hr>

      <GamesAvaliable />

      <hr className="bar-gray"></hr>

      <div className="store">
        <img src={GameStore} alt="Store-Games"></img>
        <h1 className="store-title">
          Tienda de juegos: ¡Compra, descarga y juega de inmediato!
        </h1>
        <button className="store-button">
          <span>Comprar juegos {simbol1}</span>
        </button>
      </div>

      <hr className="bar-gray"></hr>

      <div className="consoles">
        <h1>Explora las consolas de videojuegos</h1>
        <img
          className="img-responsive"
          src={Consoles}
          alt="Nintendo-Switch-Consoles"
        ></img>
        <div className="wrapper-titles">
          <h1 className="wrapper-titles-left">Familia Nintendo Switch</h1>
          <button className="btn-background wrapper-titles-right">
            <span className="btn-background-text">Más detalles {simbol1}</span>
          </button>
        </div>
      </div>

      <hr className="bar-gray"></hr>

      <Notices />

      <hr className="bar-gray"></hr>

      <div className="new-games">
        <div className="wrapper-titles">
          <div className="wrapper-titles-left">
            <h1>Nuevos lanzamientos de Nintendo Switch</h1>
          </div>
          <button className="complete-list">
            <span className="more-space">Ver la lista completa {simbol1}</span>
          </button>
        </div>
        <br />
        <GamesNew />
      </div>

      <hr className="bar-gray"></hr>

      <div className="grid-layout">
        <div className="grid">
          <div>
            <h2>Support</h2>
            <p>
              We offer technical support for Latin America in both Spanish and
              English. Click here for our support site.
            </p>
          </div>

          <div>
            <h2>Apoyo</h2>
            <p>
              Ofrecemos apoyo técnico para Latinoamérica en español y en inglés.
              Para visitar nuestra página de apoyo, haz clic aquí.
            </p>
          </div>
        </div>
      </div>

      <Help />

      <Footer />
    </div>
  )
}

export default App
