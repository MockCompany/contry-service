import { Query, ResolveReference, Resolver, Args } from '@nestjs/graphql';
import { ContryService } from '../contry.service';
import { Contry } from './contry.dto';

@Resolver('Contry')
export class ContryResolver {
  constructor(private readonly contryService: ContryService) {}

  @Query('contries')
  async getContries() {
    return this.contryService.listAll();
  }

  @Query()
  async getContry(@Args('id') id: string) {
    return this.contryService.findById(id);
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<Contry> {
    return this.contryService.findById(reference.id);
  }
}
