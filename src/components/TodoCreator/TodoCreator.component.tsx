import { useFormik } from "formik";
import { authProtectedApi } from "../../config/axios.config";
import { useTodo } from "../../hooks/useTodo.hook";

const TodoCreator = () => {
  const { reload } = useTodo();
  const formik = useFormik({
    initialValues: {
      title: "",
    },

    onSubmit: async (
      values: { title: string },
      { resetForm, setSubmitting }
    ) => {
      try {
        const response = await authProtectedApi().post("/todos", values);
        if (response.status === 200) {
          resetForm();
          reload();
          setSubmitting(false);
        }
        // Disabling any for error
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setSubmitting(false);
        alert(error.message);
      }
    },
  });

  return (
    <form className="" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <button type="submit" disabled={formik.isSubmitting}>
        Create
      </button>
    </form>
  );
};

export default TodoCreator;
