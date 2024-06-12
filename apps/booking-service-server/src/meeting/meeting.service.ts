import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeetingServiceBase } from "./base/meeting.service.base";

@Injectable()
export class MeetingService extends MeetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
