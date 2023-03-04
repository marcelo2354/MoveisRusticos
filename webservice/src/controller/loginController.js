require('dotenv');
const repo = require('../database/index');
const collection = process.env.COLLETION_LOGIN



async function createLogin(req, res){
         try {
              const data = req.body;
              const checkData = await repo.findByFilter(collection, {email: data.email});
              if(!checkData){
               const creatData = await repo.insertOne(collection, data);
              res.status(200).send({creatData}) 
              }
              res.status(400).send({Messagem: "Email Já Existente !!"})
         } catch (error) {
            
         }
    };


module.exports = {createLogin}