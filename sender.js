const amqp = require("amqplib");
async function connect() {

  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("Message");

    let msg = 'Hello'


    const msgBuffer = Buffer.from(JSON.stringify(msg));
    await channel.sendToQueue("Message", msgBuffer);
    console.log("Sending message to receiver");

    await channel.close();
    await connection.close();
  } catch (ex) {
    console.error(ex);
  }
}
connect();