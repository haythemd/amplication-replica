import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClassRoomService } from "./classRoom.service";
import { ClassRoomControllerBase } from "./base/classRoom.controller.base";

@swagger.ApiTags("classRooms")
@common.Controller("classRooms")
export class ClassRoomController extends ClassRoomControllerBase {
  constructor(
    protected readonly service: ClassRoomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
