
import { formatDistanceToNow } from 'date-fns';
import classNames from "classnames";


export default function TodoApp ( { tasks, toggleTask, removeTask, editedModeOn, editedTask, filtred } ) {

  return (
       <ul className="todo-list">
        { filtred.map(task => {
          const liClasses = classNames({ 
            'completed': task.done, 
            'editing': task.edited, 
          }); 

          return (
            <li key={ task.id } className={ liClasses }>
            <div className="view">
              <input className="toggle" type="checkbox" checked={task.done} onChange = {() => toggleTask(task.id) }/>
              <label>
                <span className="description">{ task.text }</span>
                <span className="created">
                {`created ${formatDistanceToNow(new Date(task.created), { addSuffix: true })}`}
                </span>
              </label>
              <button className="icon icon-edit" onClick={() => editedModeOn(task.id)}></button>
              <button className="icon icon-destroy" onClick = {() => removeTask(task.id) } ></button>
            </div>
            { task.edited ? ( <input type="text" className="edit" defaultValue={task.text} onKeyDown={ (event) => {
              if (event.key === "Enter") {
                editedTask(task.id, event.target.value); 
              }
             } } />) : null }
          </li>
          )
        } ) } 
      </ul>
    )
};