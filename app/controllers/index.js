const datamapper = require('../models');

module.exports = {
    async getPassword(req, res, next) {
        const password = await datamapper.getPw(req.params.pwLabel);

        if (!password) {
            next();
        }

        res.json({ password });
    },

    async savePassword(req, res) {
        const { password } = req.body;
        if (!req.body.password) {
            res.status(400).json({ error: 'password is required in body' });
        }
        await datamapper.savePw(req.params.pwLabel, password);
        res.json({ password });
    },
};
