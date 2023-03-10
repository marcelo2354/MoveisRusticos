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

async function getProdutsByname(req, res){
     try {
          const search = req.body
          const SearchProducts = await models.getProductsByName(search);
          res.status(200).send(SearchProducts);

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}
async function updateProdut(req, res){
     try {
          const newData = req.body
          
          res.status(200).send();

     } catch (error) {
          res.status(500).send(console.log(error));

     }
}


module.exports = { createProduto, getAllProduts, getProdutsByname, updateProdut }