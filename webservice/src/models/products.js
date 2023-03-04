/* eslint-disable linebreak-style */
require('dotenv').config();
const repository = require('../repository/index');


const COLLETION_PRODUCTS = process.env.COLLETION_PRODUCTS;



// create
async function create(newProduct) {
	const result = await repository.findByFilter(COLLETION_PRODUCTS, { titulo: newProduct.titulo });
    if(!result){
        await repository.insertOne(COLLETION_USUARIO, newProduct);

        return newProduct
    }else{
        const message = { aviso:'Este Produto Já Existe no Banco de dados da loja!!'};

        return message;
    }
}

const usuarioController = {
	create
};

module.exports = usuarioController;