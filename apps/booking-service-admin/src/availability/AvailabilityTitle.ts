import { Availability as TAvailability } from "../api/availability/Availability";

export const AVAILABILITY_TITLE_FIELD = "userId";

export const AvailabilityTitle = (record: TAvailability): string => {
  return record.userId?.toString() || String(record.id);
};
