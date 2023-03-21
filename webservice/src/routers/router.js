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
router.use(bodyParser.json({ limit: '11mb' }));
router.use(bodyParser.urlencoded({ limit: '11mb', extended: true }));


router.get('/', (req, res)=> res.status(200).send({Messagem: 'Sistema Funcionando !!!'}));

// Criar Login do ADM
router.post('/createADM',  controllLogin.createAdm);
// Usar Email e Senha Criado para entrar
router.post('/ADM', controllLogin.loginAdm);
// Atualizar Email e Senha
router.get('/ADM', controllLogin.readAllADM);
// Atualizar Email e Senha
router.put('/ADM/:id', controllLogin.updateADM);
// Deletar Email e Senha
router.delete('/ADM/:id', controllLogin.deleteADM);



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
router.delete('/product/:id', controllProduts.deleteProdut);

module.exports = router;