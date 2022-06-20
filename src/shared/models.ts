import { Client } from "src/client/model/client.entity";
import { User } from "src/user/model/user.entity";

export type LoginResponse = {
  isUser: boolean;
  session: string;
  account : User | Client
};
export type Credentials = {
  username?: string;
  password?: string;
  key?: string;
  name?: string
};
