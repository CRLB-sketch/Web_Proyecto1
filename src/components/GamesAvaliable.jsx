import React from 'react';

// -> Imagenes para mostrar en los juegos por defecto
import GameDef01 from '../img/games_def/hero.avif'

const GamesAvaliable = () => {
    return(
        <div className='avaliable-games'>
            {/* Creo que para esta seccion necesitaré una especie de carrusel o algo así  */}
            <div className='game'>
                <img src={GameDef01} alt='Mario Strickers'></img>
                <h2>Resérvalo ya</h2>
                <p>Nintendo Switch</p>
            </div>
        </div>
    )
}

export default GamesAvaliable