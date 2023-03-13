const User = require('../models/user')
const _ = require('lodash');

/* Create User */
const createUser = {}
createUser.api = async (req, res) => {
    const { error } = User.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (await User.findOne({ email: req.body.email }))
        return res.status(400).send('Um usuário com esse e-mail já existe.');
    
        const user = new User(_.pick(req.body, ['email', 'password']));
    await user.save();

    res.status(201).send(user);
}

module.exports = {
    createUser,
}