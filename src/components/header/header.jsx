export default function Header( { handleNameChange } ) {
  
  const keyDownFunction = (event) => {
    if (event.key === "Enter") {
      handleNameChange(event.target.value); 
      event.target.value = '';
    }
  };
  
  return (
        <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={keyDownFunction} />
      </header>
    )
} 