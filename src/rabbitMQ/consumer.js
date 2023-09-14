const amqp = require("amqplib");
//const logger = require('../config/logger');
//const userService= require('../services/user.service')
async function ConsumeFromRabbit(routingKeys=[]) {

    const rabbitmqUrl = "amqp://localhost:5672";
    const connection = await amqp.connect(rabbitmqUrl);
    const exchange = "dataExchange";
  
    const options = {};

    let channel = await connection.createChannel();
    console.log("wating for data......")

   console.log(routingKeys)

    await channel.assertExchange(exchange, "topic", options);
    
   const { queue } = await channel.assertQueue("", options);
    routingKeys.forEach((routingK)=>{
      channel.bindQueue(queue, exchange, routingK);
    })   
   
    channel.consume(queue ,(data) => {
    /*   if (data.fields.routingKey.includes('user')&&data.fields.routingKey.includes('create')) {
        userService.createUser(JSON.parse(data.content.toString()))
      }
      else if(data.fields.routingKey.includes('user')&&data.fields.routingKey.includes('update')){
        userService.updateUser(JSON.parse(data.content.toString()))
        
      } */
      console.log(" data recived")
      
      channel.ack(data, false, true);
    });
}


module.exports=ConsumeFromRabbit