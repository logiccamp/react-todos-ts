import React, { useRef } from 'react'
import './style.css';

interface iProps {
    todo : string;
    fSetTodo: Function;
    handleAdd : (e:React.FormEvent)=>void;
}
function InputField({todo, fSetTodo, handleAdd}:iProps) {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={
        (e)=>{
            handleAdd(e);
            inputRef.current?.blur();
        }}>
        <input ref={inputRef} value={todo} onChange={
            (e)=>{
                fSetTodo(e.target.value)
            }
        } type="input" placeholder='Enter a task' className='input__box' />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField;