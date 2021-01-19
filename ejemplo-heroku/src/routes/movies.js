const { Router } = require('express'); 
const router = Router();

const movies = require('../sample.json');


router.get('/', (req, res) => {
    res.json(movies);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find( movie => movie.id == id );

    if (movie) {
        res.json(movie);
    }
    else{
        res.status(500).json({
            Status: false,
            Message: 'No se encontró la peli, sorry bro :´c',
            Data: null
        });
    }
});

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        movies.push(newMovie);
        res.json(movies);
    }
    else{
        res.status(500).json('Respuesta erronea');
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {

        movies.forEach( (movie, index) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
                res.send('Pelicula actualizada');
            }
            else if(index == movies.length -1){
                res.status(500).send('No se encontró la pali bro, sorry');
            }
        });

    }
    else{
        res.status(500).json({ error: "Faltan datos por llenar" });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const movieIndex = movies.findIndex( movie => movie.id == id );

    if( movieIndex ){
        movies.splice(movieIndex, 1);
        res.send(movies);
    }
    else{
        res.status(500).send('Pelicula no encontrada');
    }
});

module.exports = router;