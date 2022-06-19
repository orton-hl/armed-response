import { Client } from "src/Client/model/client.entity";
import { User } from "src/User/model/user.entity";

export type LoginResponse = {
  isUser: boolean;
  session: string;
  account : User | Client
};
export type Credentials = {
  username?: string;
  password: string;
  key?: string;
};
