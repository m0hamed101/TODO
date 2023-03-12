import { useState } from 'react';
import './App.css';
import { TodoForm } from './Todoform';
import { Todo } from './components/Todo';
function App() {

  let [todos, settodos] = useState([])
  const addtodo = (todo) => {
    settodos([todo, ...todos])
  }

  const handledelete = (id) => {
    settodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div className="App" >
      <TodoForm onSubmit={addtodo} />
      <div className='map'>
        {todos.map((todo) => (
          <Todo className="todoo"
            key={todo.id}
            todo={todo}
            onDelete={() => handledelete(todo.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
