import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import GamesDef from './json/GamesDef.js'

import '../css/games.css'

const GamesAvaliable = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return(
        <div className='avaliable-games'>
            <Slider {...settings}>
                {GamesDef.map((game) => (
                    <div className='game'>
                        <img src={game.img} alt={game.title}></img>
                        <h2>{game.state}</h2>
                        <p>{game.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default GamesAvaliable