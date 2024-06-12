import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  avatar?: string | null;
  email?: string | null;
  firstName?: string | null;
  googleId?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};