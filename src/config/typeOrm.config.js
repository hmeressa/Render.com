const configs = require('./config.config');
// const pg = require('pg')({

// })
const { User, Role } = require("../model");

module.exports = {
    type: 'postgres',
    host: configs.postgres.host,
    // ssl: { rejectUnauthorized: false },
    port: configs.postgres.port,
    username: configs.postgres.userName,
    password: configs.postgres.pswd,
    database: configs.postgres.database,
    entities: [User, Role],
    // entities: [Post,Project,Task,SubTask,Milestone,minuteOfMeeting,agenda,agendaTopic,momAction,momAttendees, Risk, Issue, AfterActionAnalysis, RelatedIssue, Action, AfterActionAnalysisIssueRelated],
    // entities: [Post,Project,Task,SubTask,Milestone,minuteOfMeeting,agenda,agendaTopic,momAction,momAttendees],

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

