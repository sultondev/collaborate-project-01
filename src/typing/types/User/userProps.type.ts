export type userPropsType = {
  id: number | null;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean | null;
  role: {
    id: number | null;
    name: string;
    description: string;
    type: string;
  };
  created_at: string;
  updated_at: string;
};

export type userRegistrationType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};
