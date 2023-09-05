const app = require('./app');
const AppDataSource = require('./config/dbConnection.config')

AppDataSource.initialize().then(() => {
    console.log('Connected to Postgres through Typeorm');
    server = app.listen(3000, () => {
        console.log(`Listening to port http://localhost:3000`);
    });
}).catch((e) => {
    console.log(`Exception Error ${e}`)
})