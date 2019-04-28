const User = require('../Model/Users');
const _ = require('lodash');

module.exports = {
    find: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).send(users);
        } catch (err) {
            res.status(400).send('error'); 
        }
    },
    create: async (req, res) => {
        try {
            const user = new User({
                name: req.body.name,
                years: req.body.years
            });
            await user.save();
            res.status(200).send('user created');
        } catch (err) {
            res.status(400).send('error');
        }
    },
    update: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                res.status(401).send('no hay user con ese id');
            }
            const body = _.pick(req.body, ['name', 'years']);
            user.set(body);
            await user.save();
            res.status(200).send('user updated');
        } catch (err) {
            res.status(400).send('error');
        }
    },
    delete: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                res.status(401).send('no hay user con ese id');
            }
            await user.delete();
            res.status(200).send('user deleted');
        } catch (err) {
            res.status(400).send(err);
        }
    }
};
