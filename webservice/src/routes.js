/* LIBRARIES */
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/usersController');

/* CONFIG */
const router = express.Router();
router.use(bodyParser.json());

/* ROUTES */
router.get('/', (_, res)=> res.status(200).send({Mensagem: 'Sistema funcionando!'}));

router.post('/api/createUser', userController.createUser.api);
// router.post('/login', controllLogin.login);

// router.post('/product', controllProducts.createProduto);
// router.get('/product', controllProducts.getAllProduts);

// router.get('/productSearch', controllProducts.getProdutsByname);
// router.put('/product', controllProducts.updateProdut);

module.exports = router;