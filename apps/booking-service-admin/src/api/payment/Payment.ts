import { Booking } from "../booking/Booking";

export type Payment = {
  amount: number | null;
  booking?: Booking | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  paymentStatus?: "Option1" | null;
  updatedAt: Date;
};
