
   
const TodoItem =({todo,handleStatus})=>{
    return (
        <div className="todo">
            
            <button onClick ={()=>handleStatus(todo.id)}>
                {!todo.status ?
                "❌":"✓"}

            </button>

            <h3 style={{textDecoration:`${todo.status ? "line-through":""}`,
            }}>{todo.text}</h3>
            <p style ={{color:`${todo.status ? 'green':'red'}`,}}>
                {todo.status?"compleated ": "pending"}
            </p>
        </div>
    )
}

export default TodoItem;