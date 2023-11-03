const app = require('./app');
const fs = require('fs');
const path = require('path');
const AppDataSource = require('./config/dbConnection.config')
const { Producer } = require('./rabbitMQ/producer.rabbitMQ')
const { ConsumeFromRabbit } = require('./rabbitMQ/consumer.rabbitMQ')

// console.log(jsonFilePath)
AppDataSource.initialize().then(() => {
    console.log('Connected to Postgres through Typeorm');
    server = app.listen(3000, () => {
        console.log(`Listening to port http://localhost:3000`);
    });
}).catch((e) => {
    console.log(`Exception Error ${e}`)
})
// ConsumeFromRabbit(['user.*']).catch((error) => {
// console.error('Error consuming messages:', error);
// });