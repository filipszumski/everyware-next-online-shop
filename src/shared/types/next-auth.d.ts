// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    name: string;
    id: string;
    email: string;
  }

  interface Session {
    user: User;
  }
}
