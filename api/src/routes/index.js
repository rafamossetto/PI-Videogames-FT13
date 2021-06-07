const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// GET a '/videogames
router.get('/videogames', (req, res) => {
    if (req.query.name) {
        return axios.get(`https://api.rawg.io/api/games?search=${req.query.name}&key=c542e67aec3a4340908f9de9e86038af`)
            .then(response => {
                if (!response.data.count) return res.send(`No se encontro ningun videojuego con el nombre "${req.query.name}"`);
                return res.json(response.data.results.splice(0, 15))
            })
            .catch(err => res.status(500).json(err))
    } else {
        axios.get('https://api.rawg.io/api/games?key=c542e67aec3a4340908f9de9e86038af')
            .then(response => res.json(response.data.results.splice(0, 15)))
            .catch(err => res.status(500).json(err))
    }
})
// GET /videogame/:idVideoGame
router.get('/videogame/:idVideogame', (req, res) => {
    const { idVideogame } = req.params
    const id = parseInt(idVideogame);
    axios.get(`https://api.rawg.io/api/games/${id}?key=c542e67aec3a4340908f9de9e86038af`)
        .then(response => {
            const { name, background_image, genres, description, released, rating, platforms } = response.data;
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
    const response = await axios.get('https://api.rawg.io/api/genres?key=c542e67aec3a4340908f9de9e86038af');
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
