const amqp = require('amqplib');
var channel, connection;

async function publishToRabbit(routingKeys,data) {
    try {
        const rabbitmqConnection = 'amqp://localhost:5672';
        connection = await amqp.connect(rabbitmqConnection);
        channel = await connection.createChannel();
        let exchange = 'dataExchange';
       //let queueName="test123";
       // let message = "sending message" 
       await channel.assertExchange(exchange, 'topic', {});
     //   await channel.assertQueue(queueName,{durable:false})
       //await channel.bindQueue(queueName, exchange, routingKeys, null);
        channel.publish(exchange, routingKeys, Buffer.from(JSON.stringify(data)),{});
     //channel.sendToQueue(queueName,Buffer.from(JSON.stringify(data)))
        console.log(data)
        //setTimeout
        await channel.close();
        await connection.close();
    } catch (error) {

        console.log(`Error occured while trying to publish to queue`);
        console.log(error);
    }
}

module.exports = publishToRabbit;