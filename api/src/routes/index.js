require('dotenv').config();
const { APIKEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// GET a '/videogames
router.get('/videogames', async (req, res) => {
    if (req.query.name) {
        try {
            const response = await axios.get(`https://api.rawg.io/api/games?search=${req.query.name}&key=${APIKEY}`);
            if (!response.data.count) return res.send(`No se encontro ningun videojuego con el nombre "${req.query.name}"`);
            response.data.results.forEach((e) => {
                let generos = []
                e.genres.forEach(g => generos.push(g.name))
                e.genres = generos;
            })
            return res.json(response.data.results.splice(0, 15))
        } catch (err) {
            return res.send(500, err)
        }
    } else {
        try {
            let pages = 0;
            let results = [];
            let response = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}`);
            while (pages < 2) {
                pages++;
                response.data.results.forEach((e) => {
                    let generos = []
                    e.genres.forEach(g => generos.push(g.name))
                    e.genres = generos;
                })
                results = [...results, ...response.data.results]
                response = await axios.get(response.data.next)
            }
            return res.json(results)
        } catch (err) {
            return res.sendStatus(501, err)
        }
    }
})
// GET /videogame/:idVideoGame
router.get('/videogame/:idVideogame', async (req, res) => {
    const { idVideogame } = req.params
    const id = parseInt(idVideogame);
    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`);
        let { name, background_image, genres, description, released, rating, platforms } = response.data;
        genres = genres.map(g => g.name);
        platforms = platforms.map(p => p.platform.name);
        return res.json({
            name,
            background_image,
            genres,
            description,
            released,
            rating,
            platforms
        })
    } catch (err) {
        return res.send(500, err)
    }
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
    console.log(req.body)
    res.json(req.body)
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
