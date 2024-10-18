
export default function Footer( { allTasks, clearAllTasks } ) {
    return(
        <footer className="footer">
        <span className="todo-count">{ allTasks } items left</span>
        <ul className="filters">
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        <button className="clear-completed" onClick={ clearAllTasks }>Clear completed</button>
      </footer>

    )
}