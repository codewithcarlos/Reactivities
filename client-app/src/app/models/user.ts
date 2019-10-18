export interface IUser {
  username: string;
  displayName: string;
  token: string;
  image?: string;
}

export interface IUserFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  displayName?: string;
  username?: string;
}