import { useEffect, useState } from "react";
import { authProtectedApi } from "../config/axios.config";
import { useSelector, useDispatch } from "react-redux";
import { TodoItemType } from "../typing/types/Todo/TodoItem";
import { VoidSetter } from "../typing/types/general/VoidSetter.type";

const fetchApi = async (
  url: string,
  loadingSet: VoidSetter,
  StateType: string,
  errorSet: VoidSetter,
  dispatcher: VoidSetter
) => {
  loadingSet(true);
  const response = await authProtectedApi().get(url);
  if (response.status === 200) {
    dispatcher({ type: StateType, payload: response.data });
    loadingSet(false);
  }
  errorSet("Something went wrong");
  loadingSet(false);
};

export const useTodo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: { todos: TodoItemType[] }) => state.todos);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const load = () => {
    fetchApi("/todos", setLoading, "FETCH_TODOS", setError, dispatch);
  };
  useEffect(() => {
    load();
  }, []);

  return { todos, error, loading, reload: load };
};
