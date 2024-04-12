import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Store/TodoSlices";
import { div } from "three/examples/jsm/nodes/Nodes.js";

function TodoCard({ data }) {
    const [todoData, setTodoData] = useState(data.text);
 
    const dispatch = useDispatch()
    const handleUpdate = () => {
        setTodoData(todoData);
        dispatch(updateTodo({ id: data.id, text: todoData }))


    }

    const handleDelete = () => {
        dispatch(removeTodo({ id: data.id }))
    }
    return (
        <div className="flex justify-center flex-wrap">
            <div className="inline-flex px-5 py-7 rounded-lg shadow-xl justify-center mt-14 relative bg-slate-200 bg-opacity-5 flex-wrap">
                <input
                    onChange={(e) => { setTodoData(e.target.value) }}
                    value={todoData}
                    type="text"
                    placeholder="type your thought"
                    className="py-1 px-3 outline-none border-none bg-slate-200 text-red-950 rounded-md shadow-md capitalize" />
                <button
                    className="bg-green-500 text-white px-7 py-1 mx-2 rounded-md shadow-md capitalize" onClick={handleUpdate}>update</button>
                <button className="bg-red-500 text-white px-7 py-1 rounded-md shadow-md capitalize" onClick={handleDelete}>delete</button>
            </div>
        </div>
    )
}

export default TodoCard;
