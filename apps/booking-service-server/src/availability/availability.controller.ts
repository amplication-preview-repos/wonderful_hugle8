import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AvailabilityService } from "./availability.service";
import { AvailabilityControllerBase } from "./base/availability.controller.base";

@swagger.ApiTags("availabilities")
@common.Controller("availabilities")
export class AvailabilityController extends AvailabilityControllerBase {
  constructor(
    protected readonly service: AvailabilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
