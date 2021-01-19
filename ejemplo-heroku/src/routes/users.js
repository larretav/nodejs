const { Router } = require('express'); 
const router = Router();
const fetch = require('node-fetch');

router.get( '/', async( req, res ) => {
    const response = await fetch('http://3.17.163.32:5001/api/Empleados');
    const emp = await response.json();
    res.json({Empleados: emp});
});

router.get('/:id', async(req, res) => {
    const response = await fetch(`http://3.17.163.32:5001/api/Empleados/${req.params.id}`);
    const emp = await response.json();

    res.json(emp);
    
});


module.exports = router;