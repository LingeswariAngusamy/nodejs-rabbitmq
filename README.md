# nodejs-rabbitmq
rabbitmq example using node js

<br>
<b>Downloading and Installing RabbitMQ</b>
<br>
We need to download and install the rabbitmq. Here I have attached the official link
<br>
<link href="https://www.rabbitmq.com/download.html">https://www.rabbitmq.com/download.html</link>
</br>


<br>

The above RabbitMQ communication happens via AMQP protocol, and for Nodejs there is amqplib npm package to interact with RabbitMQ.
<br>

$ npm init
<br>
$ npm install --save amqplib
<br>

// Creating two empty files
<br>
$ touch sender.js
<br>
$ touch receiver.js
<br>

