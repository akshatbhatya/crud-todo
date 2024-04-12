import { useSelector } from "react-redux";
import TodoCard from "./TodoCard"
function TodoData(){
    const data=useSelector(state=>state.todo);
        return(
        <>
        {
            data.map((todo)=>{
                 return <TodoCard data={todo} key={todo.id}/>
            })
        }
        </>
    )
}

export default TodoData;