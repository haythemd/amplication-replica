import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SyllabusService } from "./syllabus.service";
import { SyllabusControllerBase } from "./base/syllabus.controller.base";

@swagger.ApiTags("syllabi")
@common.Controller("syllabi")
export class SyllabusController extends SyllabusControllerBase {
  constructor(
    protected readonly service: SyllabusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
