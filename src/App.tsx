import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

let name:string;
let age:number;
let isStudent:boolean;

const App:React.FC =() => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, {id : Date.now(), todo, isDone: false}]);
    setTodo("");
  }
  const fsetTodo = (value:string) =>{
    setTodo(value)
  }

  return (
    <div className="App">
      <span className='heading'>
        Taskify
      </span>
      <InputField handleAdd={handleAdd} todo={todo} fSetTodo={fsetTodo}/>

     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
