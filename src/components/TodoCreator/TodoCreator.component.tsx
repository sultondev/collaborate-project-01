import { useFormik } from "formik";

const TodoCreator = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
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
  return (
    <form className="" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default TodoCreator;
