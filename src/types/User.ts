import { Base, Role } from "~/types/common";

export interface UserData extends Base {
    email: string;
    fullname: string;
    lastName: string;
    avatar: string;
    role: Role;
}

export interface UserInput
    extends Omit<UserData, "id" | "createdAt" | "updatedAt"> {
    password: string;
}
