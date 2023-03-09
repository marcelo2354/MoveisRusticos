const models = require('../models/login');

async function createLogin(req, res) {
     try {
          const data = req.body;
          const createNewLogin = await models.create(data);

          res.status(200).send(createNewLogin);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
};

async function login(req, res) {
     try {
          const data = req.body;
          if (data.email == null && data.senha == null) {
               res.status(500).send({
                    messagem: 'preencha todos os Campos !!!'
               })
          }
          const Authentication = await models.singIn(data);
          if (Authentication.Messagem == "Email ou Senha inválidos!!") {
               res.status(500).send({
                    messagem: 'Email ou Senha inválidos !!!'
               })
          }
          res.status(200).send(Authentication);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}


module.exports = { createLogin, login }