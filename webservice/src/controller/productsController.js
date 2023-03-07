const models = require('../models/product');


async function createProduto(req, res) {
    try {
        const {image, title, description, price=[{value, incon}]} = req.body;

        if(!image || !title || !description || !price[0].value || !price[0].incon){
            res.status(401).send({Menssagem: 'Ainda Faltam Campos a serem preenchidos!!'})
        }
        if(!image && !title && !description && !price[0].value && !price[0].incon){
            res.status(401).send({Menssagem: 'Ainda Faltam Campos a serem preenchidos!!'})
        }
          
          const createNewProduct = await models.create(req.body);

          res.status(200).send(createNewProduct);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
};

async function getAllProduts(req, res){
     try {
          const Allproducts = await models.getProducts();

          res.status(200).send(Allproducts);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}


module.exports = { createProduto, getAllProduts}