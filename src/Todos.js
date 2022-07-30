import React from 'react'
import Todo from './Todo'

function Todos({todos, toggleTasks}) {
    return (
        <div>
            {todos.map( t =>
                ( <Todo todo={t} toggleTasks = {toggleTasks}/> )
            )}
        </div>
    )
}

export default Todos;
