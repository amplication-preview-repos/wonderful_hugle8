import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MeetingModuleBase } from "./base/meeting.module.base";
import { MeetingService } from "./meeting.service";
import { MeetingController } from "./meeting.controller";
import { MeetingResolver } from "./meeting.resolver";

@Module({
  imports: [MeetingModuleBase, forwardRef(() => AuthModule)],
  controllers: [MeetingController],
  providers: [MeetingService, MeetingResolver],
  exports: [MeetingService],
})
export class MeetingModule {}
