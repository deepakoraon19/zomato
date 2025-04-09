export interface User {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  createdOn?: string;
  updatedOn?: string;
  token?: string;
  isSeller?: boolean;
}
