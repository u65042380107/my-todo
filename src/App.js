import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 id="header">MY-TODO</h1>
      <input id="input"
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="input here"
      />
      <div>
      <button className="btn" onClick={addTodo}>add</button>
      </div>
      <ul className="List">
        {todos.map((todo, index) => (
          <div>
          <li className="item" key={index}> {todo} <button className="btn" onClick={() => deleteTodo(index)}>delete</button></li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;