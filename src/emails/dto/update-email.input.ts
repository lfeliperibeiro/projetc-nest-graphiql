import { CreateEmailInput } from './create-email.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateEmailInput extends PartialType(CreateEmailInput) {
  @Field(() => String, { description: 'Email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Nome' })
  @IsNotEmpty()
  name: string;
}
