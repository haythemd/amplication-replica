import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SyllabusResolverBase } from "./base/syllabus.resolver.base";
import { Syllabus } from "./base/Syllabus";
import { SyllabusService } from "./syllabus.service";

@graphql.Resolver(() => Syllabus)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SyllabusResolver extends SyllabusResolverBase {
  constructor(
    protected readonly service: SyllabusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
