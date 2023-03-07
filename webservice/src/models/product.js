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




module.exports = { create, getProducts}