/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Proyecto 1 - Página Web [Copia 'identica']
 *
 * ! Help : Penultima sección donde se miran varias politicas
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     26-Abril-2022
 */

import React from 'react'

import '../css/help.css'

const Help = () => {
  return (
    <div className="help-div">
      <nav className="modular-navigation">
        <div className="grid-navigation-help">
          <div className="navigation-list">
            <h3>Acerca de Nintendo</h3>
            <p>Información de la compañia (en inglés)</p>
            <p>Reporte de responsabilidad social corporativa (en inglés)</p>
            <p>Política de propiedad intelectual</p>
          </div>
          <div className="navigation-list">
            <h3>Dónde comprar (en inglés)</h3>
            <p>Tienda de juegos</p>
            <p>Nintendo NY (en inglés)</p>
          </div>
          <div className="navigation-list">
            <h3>Asistencia</h3>
            <p>Manual sobre precauciones de salud y seguridad</p>
            <p>Garantía</p>
            <p>Nintendo Switch</p>
            <p>Familia Nintendo 3DS</p>
            <p>Asistencia para reparación</p>
            <p>Reciclaje de productos Nintendo (en inglés)</p>
          </div>
          <div className="navigation-list">
            <h3>Padres</h3>
            <p>Información para los padres</p>
            <p>Control parental</p>
          </div>
          <div className="navigation-list">
            <h3>Comunidad</h3>
            <p>Directrices de comunidad</p>
            <p>Directrices para la seguridad en línea</p>
          </div>
          <div className="navigation-list">
            <h3>Privacidad</h3>
            <p>Política de privacidad</p>
            <p>Cookies y anuncios basados en intereses</p>
          </div>
          <div className="grid-spacer"></div>
          <div className="grid-spacer"></div>
          <div className="grid-spacer"></div>
          <div className="grid-spacer"></div>
          <div className="grid-spacer"></div>
          <div className="navigation-list">
            <h3>Legal</h3>
            <p>Documentos y Políticas</p>
            <p>Condiciones de Uso</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Help
