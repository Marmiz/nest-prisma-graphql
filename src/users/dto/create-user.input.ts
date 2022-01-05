import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field((_) => String, { description: 'mandatory user name' })
  name: string;
  @Field((_) => String, { description: 'mandatory user email' })
  email: string;
}
