// import { useState } from 'react'
// import { Fragment } from 'react'
import './App.css';
import Header from './components/header/header';
import TodoList from './components/todolist/todolist';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
    <Header />
      <section className="todoapp">
      <section className="main">
        <TodoList />
        <Footer />
      </section>
    </section>
    </>
  )
}

export default App;
