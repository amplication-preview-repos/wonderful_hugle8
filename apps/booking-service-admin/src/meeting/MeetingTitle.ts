import { Meeting as TMeeting } from "../api/meeting/Meeting";

export const MEETING_TITLE_FIELD = "title";

export const MeetingTitle = (record: TMeeting): string => {
  return record.title?.toString() || String(record.id);
};
