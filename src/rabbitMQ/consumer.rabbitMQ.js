const amqp = require("amqplib");

const userService = require('../service/user.service');

const { roleService } = require("../service");
const ConsumeFromRabbit = async (routingKeys = []) => {
    const rabbitmqUrl = "amqp://localhost:5672";
    const connection = await amqp.connect(rabbitmqUrl);
    const exchange = "userExchange";
    const options = {};

    let channel = await connection.createChannel();
    console.log("wating for data......")

    console.log(routingKeys)

    await channel.assertExchange(exchange, "topic", options);
    const { queue } = await channel.assertQueue("", options);
    routingKeys.forEach((routingK) => {
        channel.bindQueue(queue, exchange, routingK);
        console.log(queue);
    })

    channel.consume(queue, async (data) => {
        if (data.fields.routingKey.includes('role') && data.fields.routingKey.includes('create')) {

            console.log(JSON.parse(data.content.toString()), data.fields.routingKey)
            await roleService.createRole(JSON.parse(data.content.toString()))
        }
        else if (data.fields.routingKey.includes('user') && data.fields.routingKey.includes('create')) {
            console.log(JSON.parse(data.content.toString()))
            await userService.createUser(JSON.parse(data.content.toString()))
        }
    })
}

module.exports = { ConsumeFromRabbit }