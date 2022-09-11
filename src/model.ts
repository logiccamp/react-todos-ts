export interface Todo {
    id : number;
    todo : string;
    isDone : boolean;   
}

export interface iTodoList {
    todos : Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

export interface iSingleTodo {
        todo : Todo;
        todos: Todo[];
        setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}