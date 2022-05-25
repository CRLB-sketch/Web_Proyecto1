import React from 'react'

import Social from '../img/social_icons.png'
import ESRB from '../img/ESRB.png'

const Footer = () => {
    return (
        <footer>
            <ul>
                <a>
                    <img
                        className="size-2"
                        src={Social}
                        alt="Social Links"
                    ></img>
                </a>
                <a>
                    <img
                        className="size-4"
                        src={ESRB}
                        alt="Privacy Certified ESRB"
                    ></img>
                </a>
            </ul>
            © 2022 Nintendo. Los juegos son propiedad de sus respectivos dueños.
            La sede central de Nintendo of America Inc. | La sede se encuentra
            en Redmond, Washington. | Asistencia
        </footer>
    )
}

export default Footer
