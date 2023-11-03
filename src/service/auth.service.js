const { Token } = require('../model')
const appDataSource = require('../config/dbConnection.config')
const tokenRepository = appDataSource.getRepository(Token)

const storeToken = async (tokenBody) => {
    const result = tokenRepository.create(tokenBody);
    return await tokenRepository.save(result);
}

module.exports =
{
    storeToken
};