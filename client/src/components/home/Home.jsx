import React from 'react';
import { useSelector } from 'react-redux';
import s from './Home.module.css';
import Navbar from '../navbar/Navbar.jsx';
import Filters from '../filters/Filters';
import Game from '../games/Game';

function Home() {
    const videogames = useSelector(state => state.videogames);
    return (
        <main className={s.background}>
            <Navbar />
            <Filters />
            <div>
                <div className={s.games}>
                    {Array.isArray(videogames) ? videogames.map((el, idx) => <Game props={videogames[idx]} key={idx} />) :
                        <div className={s.loading}></div>}
                </div>
            </div>
        </main>
    )
}

export default Home;