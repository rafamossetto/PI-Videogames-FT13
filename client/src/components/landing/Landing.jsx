import React, { useEffect } from 'react';
import s from './Landing.module.css';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../redux/actions';

function Landing() {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    useEffect(() => dispatch(getVideogames()), [dispatch])
    const onClick =  (e) => {
        console.log(videogames)
    };
    return (
        <div className={s.landing}>
            <h1 className={s.title}>Videogames App</h1>
            <Link to={'/videogames'}>
                <button onClick={onClick} className={s.eightbitBtn}>Play!</button>
            </Link>
        </div>
    )
}

export default Landing;