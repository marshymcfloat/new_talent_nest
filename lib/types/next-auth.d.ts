import { UserRole } from "@prisma/client";
import { DefaultSession, User as DefaultUser } from "next-auth";
import { AdapterUser as DefaultAdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface User extends DefaultUser {
    role: UserRole;
  }

  interface Session {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser extends DefaultAdapterUser {
    role: UserRole;
  }
}
