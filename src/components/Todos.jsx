import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos }) => {
    return (
        <div className='w-full sm:w-4/5 sm:mx-auto h-full grid grid-cols-1 gap-1'>
            {todos.map((todo) => {
                return <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            })}
        </div>
    )
}

const styles = {
    container: {
        width: '40%',
        margin: '0 auto',
    }
}

export default Todos;