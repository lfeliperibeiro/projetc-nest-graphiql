import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Email {
  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Nome' })
  name: string;
}
