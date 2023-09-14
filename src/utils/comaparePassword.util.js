const bcrypt = require('bcrypt')
const comparePassword = (incommingPassword, existingPassword) => {
    return bcrypt.compareSync(incommingPassword.toString(), existingPassword);
}

module.exports = { comparePassword };