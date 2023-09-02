import { type ListOfTodos } from "../types"         //! se debe poner el type 


interface Props {
    todos: ListOfTodos
}

//                         en <Props> se especifica mediante la interfaz que forma de datos recibirás las props
export const Todos:React.FC<Props> =({todos})=>{
    return(
        <ul>
            {todos.map(todo=>(
                <li key={todo.id}>
                    {todo.title}
                </li>

            ))}
        </ul>

    )
}