const amqp = require('amqplib');

const publishToRabbit = async (data, routingKey) => {

    const rabbitmqConnection = "amqp://localhost:5672";
    const connection = await amqp.connect(rabbitmqConnection);
    const channel = await connection.createChannel();
    const exchange = "userExchange";
    const exchangeType = 'topic';
    await channel.assertExchange(exchange, exchangeType, {});
    channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(data)));
    console.log('User data :', data)
}







module.exports = { publishToRabbit };
