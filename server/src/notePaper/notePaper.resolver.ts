import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NotePaperResolverBase } from "./base/notePaper.resolver.base";
import { NotePaper } from "./base/NotePaper";
import { NotePaperService } from "./notePaper.service";

@graphql.Resolver(() => NotePaper)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NotePaperResolver extends NotePaperResolverBase {
  constructor(
    protected readonly service: NotePaperService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
