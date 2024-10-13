import './header.css'

 function HeaderInput () {
    return <input className="header__input" placeholder="What needs to be done?" autoFocus />;
  }

export default function Header () {
    return (
    <header className="header">
        <h1>Todos</h1>
        <HeaderInput />
      </header>)
  }