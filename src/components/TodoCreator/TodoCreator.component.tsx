import { useFormik } from "formik";
<<<<<<< HEAD
import { authProtectedApi } from "../../config/axios.config";
=======
>>>>>>> eb437b12b618349a214933282f7e0b15f65b0d68

const TodoCreator = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
<<<<<<< HEAD

    onSubmit: async (
      values: { title: string },
      { resetForm, setSubmitting }
    ) => {
      try {
        const response = await authProtectedApi().post("/todos", values);
        if (response.status === 200) {
          resetForm();
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

=======
    onSubmit: (values: { title: string }) => {
      alert(values.title);
    },
  });

  // function handleChange(e: React.FormEvent<HTMLInputElement>) {
  //   dispatch({
  //     type: "CREATE_TODO",
  //     payload: { title: e.currentTarget.value },
  //   });
  // }
>>>>>>> eb437b12b618349a214933282f7e0b15f65b0d68
  return (
    <form className="" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
<<<<<<< HEAD
      <button type="submit" disabled={formik.isSubmitting}>
        Create
      </button>
=======
      <button type="submit">Create</button>
>>>>>>> eb437b12b618349a214933282f7e0b15f65b0d68
    </form>
  );
};

export default TodoCreator;
