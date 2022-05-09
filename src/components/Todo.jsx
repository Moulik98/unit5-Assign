
import { useState } from "react"
import Todolist from "./Todolist"

const Todo =()=>{
    const [todos,setTodos]= useState([])
    const [todotext,setTodotext] = useState("")


    const handleTodo = ()=>{
        let singleTodo ={
            text:todotext,
status:false,
id:Math.random()

        }
        setTodos([...todos,singleTodo])
    setTodotext('')
    
    }


    const handleStatus= id =>{
        setTodos(
            todos.map(ele=>(ele.id===id?{...ele,status:!ele.status}:ele))

        )
    }

    return(
        <div className="todobox">
           
            <input type ="text"
            placeholder="Add a Todo..."
            value ={todotext}
            onChange ={e=>setTodotext(e.target.value)}/>
            <button onClick={handleTodo}>+</button>
            <Todolist todos ={todos} handleStatus={handleStatus}/>
        </div>
    )

    
}

export default Todo