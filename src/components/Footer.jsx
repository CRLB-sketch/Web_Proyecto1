import React from 'react'

import Social from '../img/social_icons.png'
import ESRB from '../img/ESRB.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrap">
                <ul>
                    <a>
                        <img
                            className="social-img"
                            src={Social}
                            alt="Social Links"
                        ></img>
                    </a>
                    <a>
                        <img
                            className="esrb-pc"
                            src={ESRB}
                            alt="Privacy Certified ESRB"
                        ></img>
                    </a>
                </ul>
            </div>
            <div className="copyright">
                <p>
                    <small>
                        © 2022 Nintendo. Los juegos son propiedad de sus
                        respectivos dueños.
                    </small>
                    <br />
                    <small>
                        La sede central de Nintendo of America Inc. | La sede se
                        encuentra en Redmond, Washington. | Asistencia
                    </small>
                </p>
            </div>
            <br />
        </footer>
    )
}

export default Footer
