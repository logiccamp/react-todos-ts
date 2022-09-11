import React from 'react'
import { iTodoList } from '../model'
import SingleTodo from './SingleTodo'
import './style.css';

const TodoList: React.FC<iTodoList> = ({todos, setTodos}:iTodoList) => {
  return (
    <div className='todos'>
      {
        todos.map((todo) => (
          <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))
      }
    </div>
  )
}

export default TodoList