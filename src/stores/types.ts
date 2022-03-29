export interface IUser {
  username: string;
  password: string;
}

export interface IProfile {
  id: string;
  user_id: string;
  avatar: string;
  email: string;
  updateAt: string;
}

export interface IAuth {
  id: string;
  token: string;
}
