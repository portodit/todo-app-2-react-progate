import React, { useState, createContext } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Design new app interface in Figma',
      completed: false,
    },
    {
      id: 2,
      title: 'Implement user feedback from usability testing',
      completed: false,
    },
    {
      id: 3,
      title: 'Develop login screen in React Native',
      completed: false,
    },
    {
      id: 4,
      title: 'Optimize app performance for iOS and Android',
      completed: false,
    },
    {
      id: 5,
      title: 'Research latest UI/UX trends',
      completed: false,
    },
    {
      id: 6,
      title: 'Update project documentation and design assets',
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        console.log(todo);
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{
      toggleCompleted,
      deleteTodo
    }}>
      <div className='container text-center p-3 mx-auto h-full'>
        <h1 className='font-bold font-sans text-3xl text-blue-600'>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
};

export default App;
