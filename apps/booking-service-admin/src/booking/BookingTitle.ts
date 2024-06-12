import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "meetingId";

export const BookingTitle = (record: TBooking): string => {
  return record.meetingId?.toString() || String(record.id);
};
