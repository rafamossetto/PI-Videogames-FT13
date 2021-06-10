import React from 'react';
import s from './Game.module.css';
export default function Game({ props }) {
    const { name, background_image, genres } = props;
    let genresNames = genres.reduce((acc, el) => acc.concat(`${el.name}, `), [])
    let lastElement = genresNames[genresNames.length - 1];
    genresNames[genresNames.length - 1] = lastElement.slice(0, lastElement.length - 2);
    
    return (
        <div className={s.game}>
            {/* <div id="closeIcon" className="row">
                <button className="btn btn-sm btn-danger">X</button>
            </div> */}
            <div className="card-body">
                <h5 className={s.title}>{name}</h5>
                <img src={background_image} className={s.image} alt="game background" />
                <div className="row">
                    <div className={s.genres}>
                        {genresNames}
                    </div>
                </div>
            </div>

        </div>
    );
};
