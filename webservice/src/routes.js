/* LIBRARIES */
const express = require('express');
const bodyParser = require('body-parser');
const controllLogin = require('./controller/loginController');
const controllProduts = require('./controller/productsController');

/* CONFIG */
const router = express.Router();
router.use(bodyParser.json());

/* ROUTES */
router.get('/', (_, res)=> res.status(200).send({Mensagem: 'Sistema funcionando!'}));

router.post('/createLogin',  controllLogin.createLogin);
router.post('/login', controllLogin.login);

router.post('/product', controllProduts.createProduto);
router.get('/product', controllProduts.getAllProduts);

router.get('/productSearch', controllProduts.getProdutsByname);
router.put('/product', controllProduts.updateProdut);

module.exports = router;