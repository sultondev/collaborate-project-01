import { connect } from "react-redux";

const TodoCreator = (props: any) => {
  console.log(props);

  function handleChange(e: any) {
    props.dispatch({ type: "CREATE_TODO", payload: { title: e.target.value } });
  }
  return (
    <div className="">
      <input
        type="text"
        name=""
        id=""
        onChange={handleChange}
        value={props.todos.title}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  todos: state.todos,
  user: state.user,
});
export default connect(mapStateToProps)(TodoCreator);
