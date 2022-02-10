const db = require('../config/db');

module.exports = {

    getPw(pwLabel) {
        return db.get(`${process.env.REDIS_PREFIX}:${pwLabel}`);
    },

    savePw(pwLabel, pw) {
        return db.set(`${process.env.REDIS_PREFIX}:${pwLabel}`, pw);
    },
};
