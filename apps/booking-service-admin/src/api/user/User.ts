import { JsonValue } from "type-fest";

export type User = {
  avatar: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  googleId: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
