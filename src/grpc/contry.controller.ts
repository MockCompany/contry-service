import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Contry } from '../graphql/contry.dto';
import { ContryService } from '../contry.service';

interface ContryById {
  id: string;
}

@Controller()
export class ContryController {
  constructor(private readonly contryService: ContryService) {}

  @GrpcMethod('ContryService')
  async findOne(data: ContryById): Promise<Contry> {
    const contry = await this.contryService.findById(data.id);
    if (!contry) {
      throw new Error(`Contry ${data.id} not found`);
    }
    return contry;
  }
}
