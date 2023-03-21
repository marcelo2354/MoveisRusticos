const models = require('../models/product');
const { v4: uuidv4 } = require('uuid');


async function createProduto(req, res) {
     try {
          let {image, title, description, price } = req.body;
          if (!image || !title || !description || !price) {
               res.status(401).send({ Menssagem: 'Ainda Faltam Campos a serem preenchidos!!' })
          }
          if (!image && !title && !description && !price) {
               res.status(401).send({ Menssagem: 'Ainda Faltam Campos a serem preenchidos!!' })
          }          
          const createNewProduct = req.body
          createNewProduct.id = uuidv4();
        const data = await models.create(createNewProduct);
          delete createNewProduct._id
          res.status(200).send(data);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
};

async function getAllProduts(req, res) {
     try {
          const Allproducts = await models.getProducts();

          res.status(200).send(Allproducts);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}

async function getAllPopular(req, res) {
     try {
          const search = req.body
          const SearchProducts = await models.getProductsByPopular(search);
          res.status(200).send(SearchProducts);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}

async function getProdutsByname(req, res) {
     try {
          const search = req.body
          const SearchProducts = await models.getProductsByName(search);
          res.status(200).send(SearchProducts);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}

async function updateProdut(req, res) {
     const data = req.params.id;
	const newDate = req.body;
	try {
		await models.updateById(data, newDate);

		res.status(200).send({ mensagem: 'Usuário alterado com sucesso'});

	} catch (error) {
		res.status(500).send({
			error: 'Error',
			message: error.message
		});
	}
}

async function deleteProdut(req, res) {
     const data = req.params.id;
	const senha = req.body;
	try {
		const result  = await models.deletById(data, senha);

		res.status(200).send({message: "Produto Deletado !!"});

	} catch (error) {
		res.status(500).send({
			error: 'Error',
			message: error.message
		});
	}
}


module.exports = { createProduto, getAllProduts, getProdutsByname, getAllPopular, updateProdut, deleteProdut }