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
async function readAllLogin(req, res) {
     try {
          const AllLogins = await models.getLogins();
       
          res.status(200).send(AllLogins);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}
async function updateLogin(req, res) {
     try {
          const reqId = await req.params.id
          const reqBody = await req.body
          const newlogin = await models.updateById(reqId, reqBody);
       
          res.status(200).send(newlogin);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}


module.exports = { createLogin, login, readAllLogin, updateLogin }