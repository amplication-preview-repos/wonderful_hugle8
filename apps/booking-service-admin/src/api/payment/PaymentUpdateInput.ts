import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  booking?: BookingWhereUniqueInput | null;
  currency?: string | null;
  paymentStatus?: "Option1" | null;
};
