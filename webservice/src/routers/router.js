/* LIBRARIES */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const controllLogin = require('../controller/loginController');
const controllProduts = require('../controller/productsController');
/* CONFIG */
const router = express.Router();
router.use(bodyParser.json());
/*Aceitar imagens com links Grandes*/
router.use(bodyParser.json({ limit: '10mb' }));
router.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


router.get('/', (req, res)=> res.status(200).send({Messagem: 'Sistema Funcionando !!!'}));

// Criar Login do ADM
router.post('/createLogin',  controllLogin.createLogin);
// Usar Email e Senha Criado para entrar
router.post('/login', controllLogin.login);
// Atualizar Email e Senha
router.get('/login', controllLogin.readAllLogin);
// Atualizar Email e Senha
router.put('/login/:id', controllLogin.updateLogin);
// Deletar Email e Senha
//router.delete('/login', controllLogin.updateLogin);



// Criar Inserção de Produtos
router.post('/product', controllProduts.createProduto);
// Retornar Todos os Produtos
router.get('/product', controllProduts.getAllProduts);
// Retornar Os mais Populares
router.get('/productPopular', controllProduts.getAllPopular);
// Retornar um Produto Especifico 
router.get('/productSearch', controllProduts.getProdutsByname);
// Atualizar Um produto Especifico 
router.put('/product/:id', controllProduts.updateProdut);
// Deletar um Produto especifico

module.exports = router;