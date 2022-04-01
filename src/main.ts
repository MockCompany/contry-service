import { ServerCredentials } from '@grpc/grpc-js';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GraphQLAppModule } from './graphql/module';
import { GRPCAppModule } from './grpc/module';
import * as morgan from 'morgan';

async function bootstrap() {
  const grpcApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    GRPCAppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `0.0.0.0:${process.env.GRPC_PORT || 6001}`,
        credentials: ServerCredentials.createInsecure(),
        package: 'contry',
        protoPath: 'proto/contry.proto',
      },
    },
  );
  const graphQLApp = await NestFactory.create(GraphQLAppModule);
  graphQLApp.use(morgan('tiny'));
  await Promise.all([
    grpcApp.listen(),
    graphQLApp.listen(process.env.PORT || 3001),
  ]);
}

bootstrap();
