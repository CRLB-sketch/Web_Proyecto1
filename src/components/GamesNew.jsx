import React from 'react';

// -> Imagenes de los nuevos juegos
import GameNew01 from '../img/games_new/hero01.avif'

const GamesNew = () => {
    return(
        <div>
            {/* <div className='new-game'>
                <img src={GameNew01} alt='Nintendo Switch Sports'></img>
                <p>DD/MM/YYYY</p>
                <h2>Titulo juego</h2>
                <h2>Precio</h2>
                <p>Nintendo Swich</p>
            </div> */}
            <div className='new-game'>
                <img src={GameNew01} alt='Nintendo Switch Sports'></img>
                <p>29/04/22</p>
                <h2>Nintendo Switch Sports</h2>
                <h2>$950.00</h2>
                <p>Nintendo Swich</p>
            </div>
        </div>
    )
}

export default GamesNew