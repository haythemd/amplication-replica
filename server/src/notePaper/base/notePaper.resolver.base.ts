/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateNotePaperArgs } from "./CreateNotePaperArgs";
import { UpdateNotePaperArgs } from "./UpdateNotePaperArgs";
import { DeleteNotePaperArgs } from "./DeleteNotePaperArgs";
import { NotePaperFindManyArgs } from "./NotePaperFindManyArgs";
import { NotePaperFindUniqueArgs } from "./NotePaperFindUniqueArgs";
import { NotePaper } from "./NotePaper";
import { User } from "../../user/base/User";
import { NotePaperService } from "../notePaper.service";

@graphql.Resolver(() => NotePaper)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NotePaperResolverBase {
  constructor(
    protected readonly service: NotePaperService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NotePaper",
    action: "read",
    possession: "any",
  })
  async _notePapersMeta(
    @graphql.Args() args: NotePaperFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [NotePaper])
  @nestAccessControl.UseRoles({
    resource: "NotePaper",
    action: "read",
    possession: "any",
  })
  async notePapers(
    @graphql.Args() args: NotePaperFindManyArgs
  ): Promise<NotePaper[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => NotePaper, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NotePaper",
    action: "read",
    possession: "own",
  })
  async notePaper(
    @graphql.Args() args: NotePaperFindUniqueArgs
  ): Promise<NotePaper | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => NotePaper)
  @nestAccessControl.UseRoles({
    resource: "NotePaper",
    action: "create",
    possession: "any",
  })
  async createNotePaper(
    @graphql.Args() args: CreateNotePaperArgs
  ): Promise<NotePaper> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => NotePaper)
  @nestAccessControl.UseRoles({
    resource: "NotePaper",
    action: "update",
    possession: "any",
  })
  async updateNotePaper(
    @graphql.Args() args: UpdateNotePaperArgs
  ): Promise<NotePaper | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => NotePaper)
  @nestAccessControl.UseRoles({
    resource: "NotePaper",
    action: "delete",
    possession: "any",
  })
  async deleteNotePaper(
    @graphql.Args() args: DeleteNotePaperArgs
  ): Promise<NotePaper | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: NotePaper): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}