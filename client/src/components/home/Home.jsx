import React from 'react';
import s from './Home.module.css';
import Navbar from '../navbar/Navbar.jsx';
import Filters from '../filters/Filters';

function Home() {
    return (
        <main className={s.background}>
            <Navbar />
            <Filters />
        </main>
    )
}

export default Home;