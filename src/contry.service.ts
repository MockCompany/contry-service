import { Injectable } from '@nestjs/common';
import { Contry } from './graphql/contry.dto';

@Injectable()
export class ContryService {
  private contries: Contry[] = [
    {
      id: 'US',
      name: 'United States',
    },
    {
      id: 'CA',
      name: 'Canada',
    },
  ];

  async listAll(): Promise<Contry[]> {
    return this.contries;
  }

  async findById(id: string) {
    return this.contries.find(({ id: userId }) => userId === id);
  }
}
