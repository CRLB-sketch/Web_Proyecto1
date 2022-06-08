/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 1 - Página Web [Copia 'identica']
 *
 * ! Games New : Juegos nuevos (segunda sección)
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     26-Abril-2022
 */

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import GamesRecent from './json/GamesRecent.js'

import '../css/games.css'

const GamesNew = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="avaliable-games">
      <Slider {...settings}>
        {GamesRecent.map((game) => (
          <div className="new-game">
            <img src={game.img} alt={game.title}></img>
            <p>{game.launch_date}</p>
            <h2>{game.title}</h2>
            <p>{game.plataform}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default GamesNew
