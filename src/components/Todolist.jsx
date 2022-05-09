import TodoItem from "./Todoitem";

const Todolist = ({ todos, handleStatus }) => {
  return (
    <div className="todos_container">
      {todos.map((e) => (
        <TodoItem key={e.id} todo={e} handleStatus={handleStatus} />
      ))}
    </div>
  );
};

export default Todolist;