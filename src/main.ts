import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from '@nestjs/passport';
import * as dotenv from 'dotenv';
import * as https from 'https'
import * as path from 'path'
import * as fs from 'fs'


const httpsOptions = {
  key: fs.readFileSync( path.join(__dirname, 'secrets', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'secrets', 'cert.pem')),
};


dotenv.config();

let PORT = parseInt(process.env.AR_DB_SERVER_PORT) | 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.use(
    session({
      name: 'AR_SESSION',
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  app.setGlobalPrefix(`armed-response/v${process.env.AR_API_VERSION}/api/`);
  await app.listen(PORT);
}
bootstrap();
