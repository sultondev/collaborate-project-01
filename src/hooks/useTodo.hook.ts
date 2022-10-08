import { useEffect, useState } from "react";
import { authProtectedApi } from "../config/axios.config";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function getAllTodos() {
    setLoading(true);
    const response = await authProtectedApi().get("/todos");
    if (response.data.length > 0) {
      console.log(response);
      setError("Everything is alright");
      setLoading(false);
      return response.data;
    }
    setError("You did not create any todos");
    setLoading(false);
  }

  useEffect(() => {
    getAllTodos().then((data) => {
      setTodos(data);
    });
  }, [setTodos]);

  return { todos, error, loading };
};
