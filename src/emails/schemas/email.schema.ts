import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class EmailSchema {
  @Field(() => String, { description: 'Email' })
  email: string;

  @Field(() => String, { description: 'Nome' })
  name: string;
}
