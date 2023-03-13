async function createUser(req, res) {
    try {
         const data = req.body;
         const createNewLogin = await models.create(data);

         res.status(200).send(createNewLogin);

    } catch (error) {
         res.status(500).send(console.log(error));

    }
};