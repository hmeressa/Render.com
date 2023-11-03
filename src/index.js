const app = require('./app');
const fs = require('fs');
const path = require('path');
const AppDataSource = require('./config/dbConnection.config')
const rabbitConsumer = require("./rabbitMQ/consumer")

// const jsonFilePath = path.join(__dirname, 'setting.json');
// const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// console.log(jsonFilePath)
rabbitConsumer(['user.*']).catch((error) => {
  console.error('Error consuming messages:', error);
});

AppDataSource.initialize().then(() => {
  console.log('Connected to Postgres through Typeorm');
  server = app.listen(3000, () => {
    console.log(`Listening to port http://localhost:3000`);
  });
}).catch((e) => {
  console.log(`Exception Error ${e}`)
})
ConsumeFromRabbit(['user.*']).catch((error) => {
  console.error('Error consuming messages:', error);
});