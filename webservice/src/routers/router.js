const express = require('express');
const bodyParser = require('body-parser');
const controllLogin = require('../controller/loginController');
const controllProduts = require('../controller/productsController');
const router = express();
router.use(bodyParser.json({ limit: '10mb' }));
router.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


router.get('/', (req, res)=> res.status(200).send({Messagem: 'Sistema Funcionando !!!'}));

// Criar Login do ADM
router.post('/createLogin',  controllLogin.createLogin);
// Usar Email e Senha Criado para entrar
router.post('/login', controllLogin.login);

// Criar Inserção de Produtos
router.post('/product', controllProduts.createProduto);
// Retornar Todos os Produtos
router.get('/product', controllProduts.getAllProduts);

// Retornar um Produto Especifico 
router.get('/productSearch', controllProduts.getProdutsByname);
// Atualizar Um produto Especifico 
router.put('/product', controllProduts.updateProdut);
// Deletar um Produto especifico

module.exports = router;