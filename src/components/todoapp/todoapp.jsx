export default function TodoApp ( { names } ) {
  
  return (
        <ul className="todo-list">
        { names.map(name => (
          <li key={name}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">{ names }</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
        )) } 
      </ul>
    )
};