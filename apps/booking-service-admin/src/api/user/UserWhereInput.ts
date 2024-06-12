import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  avatar?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  googleId?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
