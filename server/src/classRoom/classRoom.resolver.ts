import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ClassRoomResolverBase } from "./base/classRoom.resolver.base";
import { ClassRoom } from "./base/ClassRoom";
import { ClassRoomService } from "./classRoom.service";

@graphql.Resolver(() => ClassRoom)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ClassRoomResolver extends ClassRoomResolverBase {
  constructor(
    protected readonly service: ClassRoomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
