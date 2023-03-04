/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');
//controllers 
const productControll = require('../controller/Productcontroller')
const bodyParser = require('body-parser');

const router = express();
router.use(bodyParser.json());
router.use(cors());



// Exibe mensagem se esta funcionando a conexao
router.get('/', async (req, res) => res.status(200).send({ success: true, message: 'System Operating!' }));
router.post('/Product', productControll.createProduct);


module.exports = router;

