import { useState } from 'react'
// import { Fragment } from 'react'
import './App.css';
import Header from './components/header/header';
import TodoList from './components/todolist/todolist';
import Footer from './components/footer/footer';



function App() {
  const [todos, setTodos] = useState([]);

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false }])
    }
    else {
      alert('Пожалуйста, заполните инпут!');
    }
  }

  console.log('ЭТО!', todos);

  return (
    <>
    <Header  putTodo={putTodo} />
      <section className="todoapp">
      <section className="main">
        <TodoList  todos={todos} />
        <Footer />
      </section>
    </section>
    </>
  )
}

export default App;
