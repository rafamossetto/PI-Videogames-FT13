import React, { useState } from 'react';
import s from './CreateGame.module.css'
import Navbar from '../navbar/Navbar'
function CreateGame() {
    const [form, setForm] = useState({
        name: '',
        description: '',
        releaseDate: undefined,
        rating: 0,
        genres: [],
        platforms: []
    });
    const handleChange = e => {
        console.log()
        if (e.target.parentNode.parentNode.id === 'genres') {
            !e.target.checked ? setForm({
                ...form,
                genres: form.genres.filter(x => e.target.name !== x)
            }) : setForm({
                ...form,
                genres: form.genres.concat(e.target.name)
            })
        }
        if (e.target.parentNode.parentNode.id === 'platforms') {
            !e.target.checked ? setForm({
                ...form,
                platforms: form.platforms.filter(x => e.target.name !== x)
            }) : setForm({
                ...form,
                platforms: form.platforms.concat(e.target.name)
            })
        }
        switch (e.target.name) {
            case 'name':
                setForm({ ...form, name: e.target.value })
                break;
            case 'description':
                setForm({ ...form, description: e.target.value })
                break;
            case 'date':
                setForm({ ...form, releaseDate: e.target.value })
                break;
            case 'rating':
                setForm({ ...form, rating: e.target.value })
                break;
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

    }
    return (
        <div className={s.creategame}>
            <Navbar />
            <div className={s.wrapper}>
                <div className={s.container}>
                    <h1 className={s.title}>Create your own Game</h1>
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                        <label htmlFor='name'>Game Name: </label>
                        <br />
                        <input placeholder='Name' type="text" id='name' name='name' />
                        <br />
                        <label htmlFor="description">Description: </label>
                        <br />
                        <textarea name='description' placeholder='Description...' className={s.textarea} id="description" cols="30" rows="3" />
                        <br />
                        <label htmlFor="date">Release Date: </label>
                        <br />
                        <input name='date' type="date" id="date" />
                        <br />
                        <label htmlFor="rating">Rating: </label>
                        <br />
                        <input name='rating' placeholder='Rate from 1 to 5' type="tel" id="rating" maxLength='1' />
                        <br />
                        <div id='genres' className={s.genresContainer}>
                            <label className={s.labelTitle}>Genres </label>
                            <div className={s.divgenre}>
                                <label htmlFor="Action">Action</label>
                                <input name='Action' type="checkbox" id="Action" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Adventure">Adventure</label>
                                <input name='Adventure' type="checkbox" id="Adventure" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Indie">Indie</label>
                                <input name='Indie' type="checkbox" id="Indie" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="RPG">RPG</label>
                                <input name='RPG' type="checkbox" id="RPG" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Strategy">Strategy</label>
                                <input name='Strategy' type="checkbox" id="Strategy" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Shooter">Shooter</label>
                                <input name='Shooter' type="checkbox" id="Shooter" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Casual">Casual</label>
                                <input name='Casual' type="checkbox" id="Casual" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Simulation">Simulation</label>
                                <input name='Simulation' type="checkbox" id="Simulation" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Puzzle">Puzzle</label>
                                <input name='Puzzle' type="checkbox" id="Puzzle" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Arcade">Arcade</label>
                                <input name='Arcade' type="checkbox" id="Arcade" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Platformer">Platformer</label>
                                <input name='Platformer' type="checkbox" id="Platformer" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Racing">Racing</label>
                                <input name='Racing' type="checkbox" id="Racing" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Massively-Multiplayer">Massively-Multiplayer</label>
                                <input name='Massively-Multiplayer' type="checkbox" id="Massively-Multiplayer" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Sports">Sports</label>
                                <input name='Sports' type="checkbox" id="Sports" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Fighting">Fighting</label>
                                <input name='Fighting' type="checkbox" id="Fighting" />
                            </div>
                        </div>
                        {/* END GENRES */}
                        <div id='platforms' className={s.platformsContainer}>
                            <label className={s.labelTitle}>Platforms </label>
                            <div className={s.divgenre}>
                                <label htmlFor="PC">PC</label>
                                <input name='PC' type="checkbox" id="PC" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="iOS">iOS</label>
                                <input name='iOS' type="checkbox" id="iOS" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Android">Android</label>
                                <input name='Android' type="checkbox" id="Android" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="macOS">macOS</label>
                                <input name='macOS' type="checkbox" id="macOS" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="PlayStation 4">PlayStation 4</label>
                                <input name='PlayStation 4' type="checkbox" id="PlayStation 4" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="PlayStation 5">PlayStation 5</label>
                                <input name='PlayStation 5' type="checkbox" id="PlayStation 5" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="XBOX">XBOX</label>
                                <input name='XBOX' type="checkbox" id="XBOX" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="PS Vita">PS Vita</label>
                                <input name='PS Vita' type="checkbox" id="PS Vita" />
                            </div>
                        </div>
                        <br />
                        <button className={s.btn}>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateGame;