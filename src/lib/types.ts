export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Message = {
  status: string,
}

export type MessageLogin = Message & {
  content: User
}

export type FormState = {
    message: string,
    errors?: {
        err: string[]
    }
}

export type CreateUser = {
    name: string,
    password: string
}