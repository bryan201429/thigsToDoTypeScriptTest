import React from 'react';
import { useState } from 'react';
import { Todos } from './components/Todos';

const mockTodos=[
  {
  id:'2',
  title:'todo 2',
  completed: false
},
  {
    id:'3',
    title:'todo 3',
    completed: false,
  }
]

const App=():JSX.Element=>{       //! Necesario especificar el tipo de dato de retorno

const [todos,setTodos]=useState(mockTodos);

  return (
      <Todos todos={todos}></Todos>

  )
}

export default App
