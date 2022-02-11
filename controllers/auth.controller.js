const userModel = require('../models/user.model');
const User = require('../models/user.model');

module.exports.signUp = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try 
    {
        const user = await userModel.create({firstName, lastName, email, password });
        res.status(201).json({ user: user._id });
    }
    catch(err)
    {
        res.status(200).send({ err });
    }
};