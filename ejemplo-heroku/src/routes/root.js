const { Router } = require('express'); 
const router = Router();

//Routes
router.get('/', (req, res) => {
    const user = {
        nombre: 'Alejandro',
        usuario: 'Larry123',
        edad: 25
    }

    res.json(user);
})

module.exports = router;