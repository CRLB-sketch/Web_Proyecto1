import React, { useState } from 'react';

// -> Importar componentes
import Wrapper from './Wrapper.jsx';
import GamesAvaliable from './GamesAvaliable.jsx';
import GamesNew from './GamesNew.jsx';

// -> Imagenes principales
import NSports from '../img/SportsBackground.avif'
import Esrb_plus_10 from '../img/es-e10.svg'

// -> Imagenes para mostrar más información sobre Nintendo Switch
import GameStore from '../img/Game_Store_Switch_Games.png'
import Consoles from '../img/2296x680_ExploreGamingSystems_ES.avif'

import '../css/styles.css'

const simbol1 = '>'

const App = ({}) => {
    return(
        <div className='app'>
            <Wrapper/>
            <img src={NSports} alt='Nintendo Switch Sports' className='img-responsive'></img>

            <div className='more-information'>
                <div className='center-stage-header constrained flex padding-y-1 align-items-center justify-content-center'>
                    <h1 className='h2 margin-0'>Ya disponible</h1>
                    <div className='div-space1'></div>
                    <button className='btn-background'>Más información {simbol1} </button>
                    <div className='div-space2'></div>
                    <img className='img-esrb' src={Esrb_plus_10} alt='ESRB +10'></img>
                    <div className='descriptors'>
                        <span>Violencia moderada</span>
                        <hr className='small-bar'></hr>
                        <span>Compras dentro del juego, Interacción de usuarios</span>
                    </div>
                </div>
            </div>

            <hr className='bar-gray'></hr>

            <GamesAvaliable/>

            <hr className='bar-gray'></hr>

            <div className='store'>
                <img src={GameStore} alt='Store-Games'></img>
                <h1>Tienda de juegos:</h1>
                <h1>¡Compra, descarga y</h1>
                <h1>juega de inmediate!</h1>
                <button>Comprar juegos {simbol1}</button>
            </div>

            <hr className='bar-gray'></hr>

            <div className='consoles'>
                <img className='img-responsive' src={Consoles} alt='Nintendo-Switch-Consoles'></img>
                <h1>Familia Nintendo Switch</h1>
                <button className='btn-background'>Más detalles {simbol1}</button>
            </div>

            <hr className='bar-gray'></hr>

            <div className='news'>
                <h1>Novedades</h1>                
                <button className='btn-background'>Ver todas las noticias {simbol1}</button>
            </div>

            <hr className='bar-gray'></hr>

            <div className='new-games'>
                <h1>Nuevos lanzamientos de Nintendo Switch</h1>
                <button>Ver la lista completa {simbol1}</button>
                <br/>
                <GamesNew/>
            </div>

            <hr className='bar-gray'></hr>
            
            <div className='more'>
                <div className='support-eng'>
                    <h2>Support</h2>
                    <p>We offer technical support for Latin America in both Spanish and English. Click here for our support site.</p>
                </div>

                <div className='support-spa'>
                    <h2>Apoyo</h2>
                    <p>Ofrecemos apoyo técnico para Latinoamérica en español y en inglés. Para visitar nuestra página de apoyo, haz clic aquí.</p>
                </div>
            </div>

            <div></div>

            <footer>
            © 2022 Nintendo. Los juegos son propiedad de sus respectivos dueños.
            La sede central de Nintendo of America Inc. | La sede se encuentra en Redmond, Washington. | Asistencia
            </footer>
        </div>
    )
}

export default App