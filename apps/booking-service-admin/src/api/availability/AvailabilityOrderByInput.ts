import { SortOrder } from "../../util/SortOrder";

export type AvailabilityOrderByInput = {
  createdAt?: SortOrder;
  day?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
