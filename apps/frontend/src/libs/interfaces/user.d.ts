import { Role } from "../enums/role.enum";

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  verified_email_at?: Date;
  role: Role;
}

export interface CreateUser {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: Role;
  course_id: number;
}
