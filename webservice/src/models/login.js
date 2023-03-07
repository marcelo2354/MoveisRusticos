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




module.exports = { create, singIn}