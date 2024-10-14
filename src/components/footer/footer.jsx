import './footer.css';
import Filters from './filters/filters.jsx';



export default function Footer () {
    return (
    <footer className="footer">
            <span className="todo-count">1 items left</span>
            <Filters />
            <button className="clear-completed">Clear completed</button>
          </footer>
    )
  }