/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NotePaperWhereInput } from "./NotePaperWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NotePaperListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NotePaperWhereInput,
  })
  @ValidateNested()
  @Type(() => NotePaperWhereInput)
  @IsOptional()
  @Field(() => NotePaperWhereInput, {
    nullable: true,
  })
  every?: NotePaperWhereInput;

  @ApiProperty({
    required: false,
    type: () => NotePaperWhereInput,
  })
  @ValidateNested()
  @Type(() => NotePaperWhereInput)
  @IsOptional()
  @Field(() => NotePaperWhereInput, {
    nullable: true,
  })
  some?: NotePaperWhereInput;

  @ApiProperty({
    required: false,
    type: () => NotePaperWhereInput,
  })
  @ValidateNested()
  @Type(() => NotePaperWhereInput)
  @IsOptional()
  @Field(() => NotePaperWhereInput, {
    nullable: true,
  })
  none?: NotePaperWhereInput;
}
export { NotePaperListRelationFilter };
