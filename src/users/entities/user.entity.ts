import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Unique Id' })
  id: number;
  @Field(() => String, { description: 'Unique email' })
  email: string;
  @Field(() => String, { nullable: true })
  name: string;
  // posts Post[]
}
