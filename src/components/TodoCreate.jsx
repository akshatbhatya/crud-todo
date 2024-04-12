import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/TodoSlices";

function TodoCreate() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo("")

    }
    return (
        <>
            <div className="flex justify-center items-center pt-28">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="type your thought" className="py-1 px-3 outline-none border-none bg-slate-200 text-red-950 capitalize" onChange={(e) => { setTodo(e.target.value) }} value={todo} />
                    <button className="bg-green-400 text-white px-7 py-1" type="submit">Add</button>
                </form>
            </div>
        </>
    )
}

export default TodoCreate;