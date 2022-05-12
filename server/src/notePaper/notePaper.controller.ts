import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotePaperService } from "./notePaper.service";
import { NotePaperControllerBase } from "./base/notePaper.controller.base";

@swagger.ApiTags("notePapers")
@common.Controller("notePapers")
export class NotePaperController extends NotePaperControllerBase {
  constructor(
    protected readonly service: NotePaperService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
