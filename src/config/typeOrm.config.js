const configs = require('./config.config');
// const pg = require('pg')({

// })
const { User, Role, Permission, RolePermission } = require("../model");

module.exports = {
    type: 'postgres',
    host: configs.postgres.host,
    ssl: { rejectUnauthorized: false },
    port: configs.postgres.port,
    username: configs.postgres.userName,
    password: configs.postgres.pswd,
    database: configs.postgres.database,
    entities: [User, Role, Permission, RolePermission],
    synchronize: true,
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

