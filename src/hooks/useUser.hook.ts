import { useCallback, useEffect } from "react";
import { authProtectedApi } from "../config/axios.config";
import { useNavigate } from "react-router-dom";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
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
  // const [user, setUser] = useState<userPropsType>(initialState);
  const navigate = useNavigate();
  const user = useSelector((state: { user: userPropsType }) => state.user);

  const onMount = useCallback(async () => {
    if (!user.id) {
      const user = await getUser();
      if (user) {
        store.dispatch({ type: "SET_USER", payload: user });
        navigate("/welcome", { replace: true });
      } else {
        navigate("/login");
      }
    }
  }, [user]);

  const logout = useCallback(async () => {
    store.dispatch({ type: "DEFAULT_USER" });
    localStorage.removeItem("token");
    navigate("/login");
  }, []);

  useEffect(() => {
    onMount();
  }, []);
  return { user, logout };
};
