import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;
  @Field(() => String, { description: 'Title of the post' })
  title: string;
  @Field(() => String, { nullable: true })
  content?: string;
  @Field(() => Boolean)
  published: boolean;
  @Field(() => Int, { description: 'Author ID of the post' })
  authorId: number;
}
