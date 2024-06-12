import { Payment } from "../payment/Payment";

export type Booking = {
  createdAt: Date;
  id: string;
  meetingId: string | null;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  updatedAt: Date;
  userId: string | null;
};
