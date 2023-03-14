require('dotenv');
const repo = require('../database/index');

const collection = process.env.COLLECTION_PRODUTOS


async function create(newData){
    const checkData = await repo.findByFilter(collection, { title: newData.title });
    if (!checkData) {
        const creatData = await repo.insertOne(collection, newData);
        return newData;
    } else {
        return { Messagem: "Um Produto com este nome já está cadastrado, Ultilize outro Nome" }
    }
}

 async function getProducts() {
     const getAll = await repo.findAll(collection);
     return getAll;
}

 async function getProductsByName(search) {
    const filter = search.title;
     const getAll = await repo.findByFilterPartial(collection, filter);

     return getAll;
}
 async function getProductsByPopular() {
     const getAll = await repo.find(collection);

     return getAll;
}





module.exports = { create, getProducts, getProductsByName, getProductsByPopular}