import React from 'react';
import s from './Filters.module.css';

function Filters() {
    return (
        <div>
            <div className={s.container}>
                <label htmlFor="genres">
                    <span className={s.span}>Filter by Genres</span>
                </label>
                <select id='genres' className={s.select}>
                    <option value="default">Default</option>
                    <option value="action">Action</option>
                    <option value="indie">Indie</option>
                    <option value="adventure">Adventure</option>
                    <option value="rpg">RPG</option>
                    <option value="strategy">Strategy</option>
                    <option value="shooter">Shooter</option>
                    <option value="casual">Casual</option>
                    <option value="simulation">Simulation</option>
                    <option value="puzzle">Puzzle</option>
                    <option value="arcade">Arcade</option>
                    <option value="platformer">Platformer</option>
                    <option value="racing">Racing</option>
                    <option value="massively-multiplayer">Massively Multiplayer</option>
                    <option value="sports">Sports</option>
                    <option value="fighting">Fighting</option>
                    <option value="family">Family</option>
                    <option value="board-games">Board Games</option>
                    <option value="educational">Educational</option>
                    <option value="card">Card</option>
                </select>
            </div>
            <div className={s.container}>
                <label htmlFor="order">
                    <span className={s.span}>Order by Alphabet</span>
                </label>
                <select id="order" className={s.select}>
                    <option value="default">Default</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
            <div className={s.container}>
                <label htmlFor="orderRating">
                    <span className={s.span}>Order by Rating</span>
                </label>
                <select id="orderRating" className={s.select}>
                    <option value="default">Default</option>
                    <option value="highest">Highest Rated ★</option>
                    <option value="less">Less Rated ☆</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;