import React from 'react';

import NintendoLogo from '../img/2560px-Nintendo.jpg'

const Wrapper = () => {
    return(
        <div className='wrapper'>
            <a className='logo-nintendo' >
                <img className='button-logo-nintendo' src={NintendoLogo} alt='Nintendo-Logo'></img>
            </a>
            <div className='search-flex'>
                <div className='hide-small btn-search-nintendo'>
                    <span className='hide-small'>
                        Busca
                        {/* <span className='additional-context'>
                            juegos, consolas, soporte, etc.
                        </span> */}
                    </span>
                </div>
            </div>
            <div className='top-nav-links'>
                <a className='top-nav-link hide-small'>
                    <svg className='nav-btn-icon'>
                        <use xlinkHref=''></use>
                    </svg>
                    <span>Servicio al cliente</span>
                </a>
                <a className='top-nav-link hide-small'>
                    <svg className='nav-btn-icon'>
                        <use xlinkHref=''></use>
                    </svg>
                    <span>Lista de deseos</span>
                </a>
                <div className='alps-container'>
                    <span id='alpsLoginDoorTitle'>
                        <span className='alps-login-door-title is-pc'>
                            Iniciar sesión/Crear cuenta
                        </span>
                        {/* <span className='alps-login-door-title is-mb'>
                            Iniciar sesión
                        </span> */}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Wrapper