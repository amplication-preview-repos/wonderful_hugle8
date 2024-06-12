import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AvailabilityModuleBase } from "./base/availability.module.base";
import { AvailabilityService } from "./availability.service";
import { AvailabilityController } from "./availability.controller";
import { AvailabilityResolver } from "./availability.resolver";

@Module({
  imports: [AvailabilityModuleBase, forwardRef(() => AuthModule)],
  controllers: [AvailabilityController],
  providers: [AvailabilityService, AvailabilityResolver],
  exports: [AvailabilityService],
})
export class AvailabilityModule {}
