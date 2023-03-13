/* LIBRARIES */
const express = require('express');
const bodyParser = require('body-parser');
const controllLogin = require('./controllers/authController');
const controllProducts = require('./controllers/productsController');

/* CONFIG */
const router = express.Router();
router.use(bodyParser.json());

/* ROUTES */
router.get('/', (_, res)=> res.status(200).send({Mensagem: 'Sistema funcionando!'}));

router.post('/createLogin', controllLogin.createLogin);
router.post('/login', controllLogin.login);

router.post('/product', controllProducts.createProduto);
router.get('/product', controllProducts.getAllProduts);

router.get('/productSearch', controllProducts.getProdutsByname);
router.put('/product', controllProducts.updateProdut);

module.exports = router;