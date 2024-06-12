import { MeetingWhereInput } from "./MeetingWhereInput";
import { MeetingOrderByInput } from "./MeetingOrderByInput";

export type MeetingFindManyArgs = {
  where?: MeetingWhereInput;
  orderBy?: Array<MeetingOrderByInput>;
  skip?: number;
  take?: number;
};
