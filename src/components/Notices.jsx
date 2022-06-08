/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 1 - Página Web [Copia 'identica']
 *
 * ! Notices : Donde se mostrarán las noticias
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     26-Abril-2022
 */

import React from 'react'

import noticesMain from './json/NoticesMain'

const Notices = () => {
  return (
    <div className="flex-parent jc-center">
      <div className="consoles">
        <h1>Novedades</h1>
        <ul className="news-article-tiles">
          {noticesMain.map((notice) => (
            <li className="notice-main">
              <img
                className="notice-img"
                src={notice.img}
                alt={notice.title}
              ></img>
              <h3>{notice.date}</h3>
              <h2>{notice.title}</h2>
              <p>{notice.description}</p>
              <button className="complete-list">Leer más {'>'}</button>
            </li>
          ))}
        </ul>
        <div className="flex-parent jc-center">
          <button className="btn-background more-space">
            <span className=" btn-background-text">
              Ver todas las noticias {'>'}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notices
