const models = require('../models/login');
const { v4: uuidv4 } = require('uuid');

async function createAdm(req, res) {
     try {
          let {email, senha} = req.body;
          if (!email || !senha ) {
               res.status(401).send({ Menssagem: 'Ainda Faltam Campos a serem preenchidos!!' })
          }
          if (!email && !senha ) {
               res.status(401).send({ Menssagem: 'Ainda Faltam Campos a serem preenchidos!!' })
          }    
          const data = req.body
          data.id = uuidv4();
          const createNewLogin = await models.create(data);
          res.status(200).send(createNewLogin);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
};

async function loginAdm(req, res) {
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
async function readAllADM(req, res) {
     try {
          const AllLogins = await models.getLogins();

          res.status(200).send(AllLogins);

     } catch (error) {
          res.status(500).send(console.log(error));

     }

}
async function updateADM(req, resp) {
	const data = req.params.id;
	const newDate = req.body;
	try {
		await models.updateById(data, newDate);

		resp.status(200).send({ mensagem: 'Usuário alterado com sucesso'});

	} catch (error) {
		resp.status(500).send({
			error: 'Error',
			message: error.message
		});
	}
}
async function deleteADM(req, res) {
	const data = req.params.id;
	const senha = req.body;
	try {
		const result  = await models.deletById(data, senha);

		res.status(200).send(result);

	} catch (error) {
		res.status(500).send({
			error: 'Error',
			message: error.message
		});
	}
}


module.exports = { createAdm, loginAdm, readAllADM, updateADM, deleteADM }