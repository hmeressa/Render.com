const amqp = require('amqplib');
var channel, connection;

async function publishToRabbit(routingKey, data) {
    try {
        const rabbitmqConnection = 'amqp://172.16.33.232:5672';
        connection = await amqp.connect(rabbitmqConnection);
        channel = await connection.createChannel();
        let exchange = 'dataExchange';
        await channel.assertExchange(exchange, 'topic', {});
        channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(data)), {});
        console.log(`The data is ${JSON.stringify(data)}`);
        console.log(`Published data to queue with ${routingKey} key`);
        await channel.close();
        await connection.close();
    } catch (error) {

        console.log(`Error occured while trying to publish to queue`);
        console.log(error);
    }
}

module.exports = { publishToRabbit };
