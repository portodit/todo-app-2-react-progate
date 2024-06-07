import React, { useContext } from "react";
import { TodoContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo }) => {
    const { toggleCompleted, deleteTodo } = useContext(TodoContext);

    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return 'line-through text-gray-400'
        } else {
            return 'no-underline text-gray-800'
        }
    }

    return (
        <div className="flex justify-between items-center shadow-md bg-white rounded-lg p-4 mb-2 w-full sm:w-3/4 mx-auto transition-all duration-200 hover:shadow-lg">
            <input
                type="checkbox"
                id={"todo-" + todo.id}
                className="form-checkbox w-5 h-5 text-blue-600 rounded focus:ring-0 focus:outline-none"
                onChange={() => toggleCompleted(todo.id)}
                checked={todo.completed}
            />
            <label
                className={"ml-3 flex-grow cursor-pointer " + getTodoTitleStyle()}
                htmlFor={"todo-" + todo.id}
            >
                {todo.title}
            </label>
            <button
                className="ml-4 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-red-600 transition-colors duration-200"
                onClick={() => deleteTodo(todo.id)}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}

export default TodoItem;
