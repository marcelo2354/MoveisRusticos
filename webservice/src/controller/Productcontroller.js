require('dotenv').config();
const userModels = require('../models/products');


async function createProduct(req, resp) {
	try {
		const data = req.body;

		const addProduct = userModels.create(data)
	    resp.status(403).send(addProduct);

	} catch (error) {
		resp.status(500).send({
			error: 'Error',
			message: error.message
		});
	}
}

module.exports = {createProduct};