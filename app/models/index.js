const db = require('../config/db');

module.exports = {
    async getPw(pwLabel) {
        return await db.get(pwLabel);
    }
}
