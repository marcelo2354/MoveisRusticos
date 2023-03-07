const express = require('express');
const bodyParser = require('body-parser');
const controllLogin = require('../controller/loginController');
const controllProduts = require('../controller/productsController');
const router = express();
router.use(bodyParser.json());


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
// Atualizar Um produto Especifico 
// Deletar um Produto especifico

module.exports = router;