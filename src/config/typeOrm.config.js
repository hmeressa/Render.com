const { User } = require('../model');
const configs = require('./config.config');

// configuration file for TypeORM db connection

module.exports = {
    type: 'postgres',
    database_url: configs.postgres.host,
    host: configs.postgres.database_URL,
    port: configs.postgres.port,
    username: configs.postgres.userName,
    password: configs.postgres.pswd,
    database: configs.postgres.database,
    database_URL: configs.postgres.database_URL,

    // url: "postgres://hmeressa:pkbE7iyk2iciQc41nERKWjDPQJqVRajd@dpg-cjsqoue8b8as73fh9i10-a.oregon-postgres.render.com/renderdb_popu",

    entities: [User],

    synchronize: configs.env == "development" ? true : false,
    migrations: [__dirname + "./migrations/*.js"], // Path to migration files
    cli: {
        entitiesDir: __dirname + '/../models/*.js',
        migrationsDir: __dirname + './migrations',
    },
    extra: {
        connectionLimit: configs.postgres.maxConn, // Set the pool size to 20 connections (adjust as needed)
        idleTimeoutMillis: configs.postgres.idleTimeOut,
        connectionTimeoutMillis: configs.postgres.connTimeOut,
    },
}; 
