import React, { useEffect } from 'react';
import s from './Home.module.css';
import Navbar from '../navbar/Navbar.jsx';
import Filters from '../filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../redux/actions';
import Game from '../games/Game';

function Home() {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);
    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch])
    return (
        <main className={s.background}>
            <Navbar />
            <Filters />
            <div>
                <div className={s.games}>
                    {/* {videogames ? videogames.map((el, idx) => <Game props={videogames[idx]} key={idx} />) : 
                    <img className={s.loading} src='https://media.tenor.com/images/cac6f4f6ddbe92403ef75aab346d1f59/tenor.gif'/>} */}
                    {Array.isArray(videogames) ? videogames.map((el, idx) => <Game props={videogames[idx]} key={idx} />) :
                        <div className={s.loading}></div>}
                </div>
            </div>
        </main>
    )
}

export default Home;