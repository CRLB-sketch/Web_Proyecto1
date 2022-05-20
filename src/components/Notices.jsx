import React from 'react';

import noticesMain from './json/NoticesMain'

const Notices = () => {
    return (
        <div className='news'>
            <h1>Novedades</h1>   
            <ul className='news-article-tiles'>
                {noticesMain.map((notice) => (
                    <li className='notice-main'>
                        <img className='notice-img' src={notice.img} alt={notice.title}></img>
                        <h3>{notice.date}</h3>
                        <h2>{notice.title}</h2>
                        <p>{notice.description}</p>
                        <button>Leer más {'>'}</button>
                    </li>
                ))}
            </ul>
            <button className='btn-background'>Ver todas las noticias {'>'}</button>
        </div>
    )
}

export default Notices