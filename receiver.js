const amqp = require("amqplib");
async function connect() {
  try {

    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("Message");
    await channel.consume("Message", message => {
      if (message !== null) {
        const input = JSON.parse(message.content.toString());
        console.log(`Received Message: ${input}`);
        channel.ack(message);
      }
    });

    console.log(`Waiting for messages...`);

  } catch (ex) {
    console.error(ex);
  }
}
connect();