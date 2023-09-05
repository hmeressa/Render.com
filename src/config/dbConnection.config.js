const { DataSource } = require('typeorm');
const typeOrmConfig = require('./typeOrm.config');

const appDataSource = new DataSource(typeOrmConfig);

module.exports = appDataSource;

