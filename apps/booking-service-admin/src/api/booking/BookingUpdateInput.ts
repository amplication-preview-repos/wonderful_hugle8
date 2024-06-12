import { PaymentUpdateManyWithoutBookingsInput } from "./PaymentUpdateManyWithoutBookingsInput";

export type BookingUpdateInput = {
  meetingId?: string | null;
  payments?: PaymentUpdateManyWithoutBookingsInput;
  status?: "Option1" | null;
  userId?: string | null;
};
