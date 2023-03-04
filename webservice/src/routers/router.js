
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../controller/loginController');
const router = express();
router.use(bodyParser.json());

const collection = process.env.COLLETION_LOGIN


router.post('/createLogin', controller.createLogin);



router.post('/login', (req, res)=>{
    res.status(200).send({Messagem: 'Rota que fará login'})
});

router.post('/product', (req, res)=>{
    res.status(200).send({Messagem: 'Rota que fará criação de dados no banco!'})
});

router.get('/product', (req, res)=>{
    res.status(200).send({Messagem: 'Rota que pegará todos os dados no banco!'})
});


module.exports = router;