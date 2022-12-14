import { userPropsType } from "../../typing/types/User/userProps.type";

export const initialState: userPropsType = {
  id: 0,
  username: "",
  email: "",
  confirmed: false,
  blocked: false,
  role: {
    id: 0,
    name: "",
    description: "",
    type: "un_authenticated",
  },
  created_at: "",
  updated_at: "",
};

function userReducer(
  state = initialState,
  action: { type: string; payload?: userPropsType }
) {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return { ...payload };
    case "DEFAULT_USER":
      return { ...initialState };
    default:
      return state;
  }
}

export default userReducer;
