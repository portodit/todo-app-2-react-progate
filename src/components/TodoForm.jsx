import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div className="mb-4 sm:mb-8 mt-4 sm:w-3/5 w-full mx-auto h-full shadow-lg rounded-lg">
            <form
                className="flex justify-center items-center w-full border rounded-lg"
                onSubmit={(event) => handleSubmit(event)}
            >
                <input type="text"
                    placeholder="Add your todo"
                    className="form-input text-gray-700 h-full w-full text-lg px-4 py-3 rounded-l-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(event) => handleChangeTitle(event)}
                    value={title}
                />
                <button className="h-full px-4 py-3 text-md rounded-r-lg text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 transition-all duration-200">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </div>
    )
}

export default TodoForm;
