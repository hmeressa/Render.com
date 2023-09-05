// const configs = require('./config.config');

const { User } = require("../model");

module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: "TEST",
    entities: [User],
    // entities: [Post,Project,Task,SubTask,Milestone,minuteOfMeeting,agenda,agendaTopic,momAction,momAttendees, Risk, Issue, AfterActionAnalysis, RelatedIssue, Action, AfterActionAnalysisIssueRelated],
    // entities: [Post,Project,Task,SubTask,Milestone,minuteOfMeeting,agenda,agendaTopic,momAction,momAttendees],

    synchronize: true,
    migrations: [__dirname + "./migrations/*.js"], // Path to migration files
    cli: {
        entitiesDir: __dirname + '/../models/*.js',
        migrationsDir: __dirname + './migrations',
    },
    extra: {
        // connectionLimit: configs.postgres.maxConn, // Set the pool size to 20 connections (adjust as needed)
        // idleTimeoutMillis: configs.postgres.idleTimeOut,
        // connectionTimeoutMillis: configs.postgres.connTimeOut,
    },
};

