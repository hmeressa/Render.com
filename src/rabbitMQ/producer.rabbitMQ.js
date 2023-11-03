const amqp = require('amqplib');
const publishToRabbit = async (routingKey, data) => {
    try {
        const rabbitmqConnection = "amqp://localhost:5672";
        const connection = await amqp.connect(rabbitmqConnection);
        const channel = await connection.createChannel();
        const exchange = "dataExchange";

        await channel.assertExchange(exchange, 'topic', {});
        channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(data)), {});
        // console.log(data);
        console.log(`Published data to queue with ${routingKey} key`);

        // await channel.close();
        // await connection.close();

    } catch (error) {
        console.log(`Error occured while trying to publish to queue`);
        console.log(error);
    }
}

module.exports = { publishToRabbit };
