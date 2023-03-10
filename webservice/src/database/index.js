require('dotenv').config();
const { MongoClient } = require('mongodb');

let db = null;
let client = null;


// funçao que conecta no Banco de dados Mongobd 
async function connect() {
	client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true });
	await client.connect();
	db = client.db(process.env.DB_NAME);
}

const isConnected = () => {
	return !!client && !!client.topology && client.topology.isConnected();
};

async function findByFilter(collectionName, filter) {
	if (!isConnected()) {
		await connect();
	}
	return db.collection(collectionName).findOne(filter);
}

async function findByFilterPartial(collectionName, filter) {
	if (!isConnected()) {
	  await connect();
	}
	const regexFilter = new RegExp(filter, 'i');
	console.log(regexFilter);
	return db.collection(collectionName).find({ title: { $regex: regexFilter } }).toArray();
  }

async function findAll(collectionName) {
	if (!isConnected()) {
		await connect();
	}
	return db.collection(collectionName).find({}).toArray();
}

async function insertOne(collectionName, data) {
	if (!isConnected()) {
		await connect();
	}
	return db.collection(collectionName).insertOne(data);
}

async function updateOne(collectionName, filter, data) {
	if (!isConnected()) {
		await connect();
	}
	return db.collection(collectionName).updateOne( filter , data);
}

async function deleteOne(collectionName, filter) {
	if (!isConnected()) {
		await connect();
	}
	return db.collection(collectionName).deleteOne(filter);
}


module.exports = {
	findByFilter,
	findByFilterPartial,
	findAll,
	insertOne,
	updateOne,
	deleteOne
};