require('dotenv');
const repo = require('../database/index');

const collection = process.env.COLLECTION_LOGIN


async function create(newData){
    const checkData = await repo.findByFilter(collection, { email: newData.email });
    if (!checkData) {
        const creatData = await repo.insertOne(collection, newData);
        return creatData;
    } else {
        return { Messagem: "Email Já Existente !!" }
    }
}

async function singIn(data) {
    const checkEmail = await repo.findByFilter(collection, { email: data.email });
    const checkSenha = await repo.findByFilter(collection, { senha: data.senha });

    if (!checkEmail ||  !checkSenha) {
        return { Messagem: "Email ou Senha inválidos!!" };
    } else {
        
        return checkEmail;
    }
}

async function getLogins() {
    const getAll = await repo.findAll(collection);
    getAll.forEach(function (item, indice, array) {
        delete getAll[indice]._id;
        delete getAll[indice].senha;
      })
    return getAll;
}

async function updateById(reqId, reqBody) {
    const newData = await repo.updateOne(collection, {id: reqId}, { $set: reqBody});
    return newData
}

async function deletById(reqId, reqBody) {
    const checkSenha = await repo.findByFilter(collection, { senha: reqBody.senha });
    console.log(checkSenha);
    if (!checkSenha) {
        const msg = { Messagem: "Senha inválida!"};
        return msg
    } else {
        const newData = await repo.deleteOne(collection, {id: reqId});
        return newData
    }
}




module.exports = { create, singIn, getLogins, updateById, deletById }