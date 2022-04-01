import { Module } from '@nestjs/common';
import { ContryService } from '../contry.service';
import { ContryController } from './contry.controller';

@Module({
  imports: [],
  controllers: [ContryController],
  providers: [ContryService],
})
export class GRPCAppModule {}
