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

async function login(req, res){
     try {
          const data = req.body;
          const Authentication = await models.singIn(data);

          res.status(200).send(Authentication);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}


module.exports = { createLogin, login}