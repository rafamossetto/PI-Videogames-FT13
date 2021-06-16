require('dotenv').config();
const { APIKEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// GET a '/videogames
router.get('/videogames', (req, res) => {
    if (req.query.name) {
        return axios.get(`https://api.rawg.io/api/games?search=${req.query.name}&key=${APIKEY}`)
            .then(response => {
                if (!response.data.count) return res.send(`No se encontro ningun videojuego con el nombre "${req.query.name}"`);
                response.data.results.forEach((e) => {
                    let generos = []
                    e.genres.forEach(g => generos.push(g.name))
                    e.genres = generos;
                })
                return res.json(response.data.results.splice(0, 15))
            })
            .catch(err => res.status(500).json(err))
    } else {
        axios.get(`https://api.rawg.io/api/games?key=${APIKEY}`)
            .then(response => {
                response.data.results.forEach((e) => {
                    let generos = []
                    e.genres.forEach(g => generos.push(g.name))
                    e.genres = generos;
                })
                res.json(response.data.results.splice(0, 15))
            })
            .catch(err => res.status(500).json(err))
    }
})
// GET /videogame/:idVideoGame
router.get('/videogame/:idVideogame', (req, res) => {
    const { idVideogame } = req.params
    const id = parseInt(idVideogame);
    axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
        .then(response => {
            let { name, background_image, genres, description, released, rating, platforms } = response.data;
            genres = genres.map( g => g.name);
            platforms = platforms.map( p => p.platform.name);
            res.json({
                name,
                background_image,
                genres,
                description,
                released,
                rating,
                platforms
            })
        })
        .catch(err => res.status(500).json(err))
})
// GET a /genres
router.get('/genres', async (req, res) => {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
    const genres = response.data.results;
    res.json(genres)
    //Terminar
})
//POST a /videogame
router.post('/videogame', (req, res) => {
    // const { game } = req.body
    res.json(req.body)
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
