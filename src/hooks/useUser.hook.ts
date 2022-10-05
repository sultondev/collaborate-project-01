import { useCallback, useEffect, useState } from "react";
import { authProtectedApi } from "../config/axios.config";
import { useNavigate } from "react-router-dom";
import { store } from "../redux/store";
import { initialState } from "../redux/reducers/userReducer";
import { userPropsType } from "../typing/types/User/userProps.type";
const getUser = async () => {
  try {
    const { data } = await authProtectedApi().get("/users/me");
    return data;
  } catch (error) {
    return null;
  }
};

export const useUser = () => {
  const [user, setUser] = useState<userPropsType>(initialState);
  const navigate = useNavigate();

  const onMount = useCallback(async () => {
    if (!user.id) {
      const user = await getUser();
      if (user) {
        store.dispatch({ type: "SET_USER", payload: user });
        setUser(user);
        navigate("/welcome", { replace: true });
      } else {
        navigate("/login");
      }
    }
  }, [setUser]);

  const logout = useCallback(async () => {
    store.dispatch({ type: "DEFAULT_USER" });
    setUser(initialState);
    localStorage.removeItem("token");
    navigate("/login");
  }, [setUser]);

  useEffect(() => {
    onMount();
  }, [setUser]);
  console.log(user);
  return { user: store.getState().user, logout };
};
