import { PaymentCreateNestedManyWithoutBookingsInput } from "./PaymentCreateNestedManyWithoutBookingsInput";

export type BookingCreateInput = {
  meetingId?: string | null;
  payments?: PaymentCreateNestedManyWithoutBookingsInput;
  status?: "Option1" | null;
  userId?: string | null;
};
