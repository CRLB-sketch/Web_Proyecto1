import React from 'react'

import noticesMain from './json/NoticesMain'

const Notices = () => {
  return (
    <div className="news">
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
  )
}

export default Notices
