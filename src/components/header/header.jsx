import './header.css';
import HeaderInput from './header-input.jsx';

export default function Header({ putTodo }) {
    return (
        <header className="header">
            <h1>Todos</h1>
            <HeaderInput putTodo={putTodo} />
        </header>
    );
}