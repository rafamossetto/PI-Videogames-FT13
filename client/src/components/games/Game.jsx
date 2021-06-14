import React from 'react';
import s from './Game.module.css';
export default function Game({ props }) {
    let { name, background_image, genres, rating } = props;
    console.log(name, rating)
    //Agregamos una , y un espacio a cada genero
    genres = genres.map((el, idx) => genres.length - 1 === idx ? el : el = `${el}, `);

    return (
        <div className={s.game}>
            {/* <div id="closeIcon" className="row">
                <button className="btn btn-sm btn-danger">X</button>
            </div> */}
            <div>
                <span className={s.rating}>{`${rating}★`}</span>
                <h5 className={s.title}>{name}</h5>
                <img src={background_image} className={s.image} alt={'This background is not available'} />
                    <div className={s.genres}>
                        {genres}
                    </div>
            </div>

        </div>
    );
};
