import { useState } from "react"


export default function TodoApp ( { tasks, toggleTask, removeTask } ) {

  return (
       <ul className="todo-list">
        { tasks.map(task => {
          return (
            <li key={ task.id } className={ 
              task.done? 'completed' : ''
             }>
            <div className="view">
              <input className="toggle" type="checkbox" onChange = {() => toggleTask(task.id) }/>
              <label>
                <span className="description">{ task.text }</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick = {() => removeTask(task.id) } ></button>
            </div>
          </li>
          )
        } ) } 
      </ul>
    )
};