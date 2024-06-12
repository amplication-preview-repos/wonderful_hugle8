import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type BookingWhereInput = {
  id?: StringFilter;
  meetingId?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  status?: "Option1";
  userId?: StringNullableFilter;
};
