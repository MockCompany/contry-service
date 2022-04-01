import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ContryResolver } from './contry.resolver';
import { ContryService } from '../contry.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      debug: false,
      playground: false,
      path: '/graphql-federated',
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [],
  providers: [ContryResolver, ContryService],
})
export class GraphQLAppModule {}
