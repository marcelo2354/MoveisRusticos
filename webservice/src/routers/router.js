/* LIBRARIES */
const express = require('express');
const bodyParser = require('body-parser');
const controllLogin = require('../controller/loginController');
const controllProduts = require('../controller/productsController');
/* CONFIG */
const router = express.Router();
router.use(bodyParser.json());
/*Aceitar imagens com links Grandes*/
router.use(bodyParser.json({ limit: '10mb' }));
router.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


<<<<<<< HEAD
router.get('/', (req, res)=> res.status(200).send({Messagem: 'Sistema Funcionando !!!'}));
=======
router.get('/', (req, res)=> res.status(200).send({Mensagem: 'Sistema Funcionando!'}));

>>>>>>> 45154641342f0015b8a3e9c82b62bccb12fbdab4
// Criar Login do ADM
router.post('/createLogin',  controllLogin.createLogin);
// Usar Email e Senha Criado para entrar
router.post('/login', controllLogin.login);
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