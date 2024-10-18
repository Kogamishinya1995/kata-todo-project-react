import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import TodoApp from './components/todoapp/todoapp';
import { useState } from 'react';



export default function App () {
  const [names, setName] = useState([]); 
  
  const handleNameChangeFunc = (names) => {
    setName(prevState => ([...prevState, names ]));
  }

  
  return (
    <>
      <section className="todoapp">
    <Header handleNameChange={ handleNameChangeFunc } />
    <section className="main">
    <TodoApp names={ names } />
    <Footer />
    </section>
    </section>
    </>
  )
}