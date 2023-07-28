import React from 'react'

const CompletedList = ({CCompletedTodos}) => {
  return (
    <div className='completed=tasks'>
      <h1>Completed Task List</h1>
      <ul>
        {CCompletedTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            </li>
        ))}
      </ul>
      </div>
  )
}

export default CompletedList