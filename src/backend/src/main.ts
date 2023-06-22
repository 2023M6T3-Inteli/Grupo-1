import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const mqtt = require("mqtt");

// initialize the MQTT client
var client = mqtt.connect("mqtt://mqtt-dashboard.com");

const topic = "intelies-grupo1/recommendation";

// setup the callbacks
client.on("connect", () => {
  console.log("Conexão com o broker realizada com sucesso");
  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});

export async function publish(topic: string, message: string): Promise<any> {
    client.publish(topic, message);

    let lastMessage = null;
    
    client.on('message', (mqttTopic, payload) => {
      lastMessage = payload.toString().replace(/'/g, '"');
    });

    return new Promise<string[]>((resolve) => {
        setTimeout(() => {
            resolve(lastMessage ? lastMessage : 'No message received');
        }, 10000);
    });
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle('DELL Genius API')
        .setDescription('Documentacion for all router')
        .setVersion('0.0.1')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.enableCors();
    await app.listen(3000);
}
bootstrap();
