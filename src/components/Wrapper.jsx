import React from 'react'

import NintendoLogo from '../img/2560px-Nintendo.jpg'
import Search from '../img/wrapper/Btn_Search.svg'
import ClientService from '../img/wrapper/btn_servicio_cliente.png' // XD
import WishList from '../img/wrapper/btn_lista_deseos.png'
import StartSesion from '../img/wrapper/btn_start_sesion.png'
import Games from '../img/wrapper/btn_juegos.png'
import Team from '../img/wrapper/btn_equipo.png'
import EventsAndNews from '../img/wrapper/btn_noticias_y_eventos.png'

import '../css/wrapper.css'

const Wrapper = () => {
  return (
    <>
      <ul className="horizontal">
        <li className="li-horizontal">
          <a>
            <img
              className="button-logo-nintendo"
              src={NintendoLogo}
              alt="Nintendo-Logo"
            ></img>
          </a>
        </li>
        <li className="li-horizontal">
          <a>
            {' '}
            <div className="btn-search-text">
              <img className="search-icon" src={Search}></img>
              <span className="search-text">
                Busca juegos, consolas, soporte, etc.
              </span>
            </div>
          </a>
        </li>
        <li className="rightli">
          <a>
            <div className="option">
              <img className="img-of-wrapper size-2" src={StartSesion}></img>
            </div>
          </a>
        </li>
        <li className="rightli">
          <a>
            <div className="option">
              <img className="img-of-wrapper size-1" src={WishList}></img>
            </div>
          </a>
        </li>
        <li className="rightli">
          <a>
            <div className="option">
              <img className="img-of-wrapper size-1" src={ClientService}></img>
            </div>
          </a>
        </li>
      </ul>
      <hr className="normal-bar"></hr>
      <nav className="bottomNav">
        <ul className="wrapper nav-list">
          <div>
            <img className="size-3" src={Games}></img>
          </div>
          <div>
            <img className="size-3" src={Team}></img>
          </div>
          <div>
            <img className="size-4" src={EventsAndNews}></img>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Wrapper
