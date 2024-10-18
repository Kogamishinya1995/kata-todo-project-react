import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import TodoApp from './components/todoapp/todoapp';
import { useEffect, useState } from 'react';
import uniqueId from 'lodash/uniqueId';

export default function App () {
  const [tasks, setTasks] = useState([]); 
  const [allTasks, setAllTasks] = useState(0);

  
  const handleNameChangeFunc = (tasks) => {
    setTasks(prevState => ([...prevState, { id: uniqueId('task_'), text: tasks, done: false, created: Date.now(), edited: false }]));
    setAllTasks(allTasks + 1);
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id !== id) return task;

      return {
        ...task,
        done: !task.done
      }
    }));
  }

  const editedModeOn = (id) => {
    setTasks(tasks.map(task => {
      if (task.id !== id) return task;

      return {
        ...task,
        edited: true
      }
    }));
  }


  const editedTask = (id,  newText) => {
    setTasks(tasks.map(task => {
      if (task.id !== id) return task;

      return {
        ...task,
       text:  newText,
       edited: false
      }
    }));
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    setAllTasks(allTasks - 1);
  }

  const clearAllTasks = () => {
    setTasks([]);
    setAllTasks(0);
  }

  return (
    <>
      <section className="todoapp">
    <Header handleNameChange={ handleNameChangeFunc } />
    <section className="main">
    <TodoApp tasks={ tasks } 
    toggleTask={ toggleTask }
    removeTask={ removeTask } 
    editedModeOn={ editedModeOn }
    editedTask={ editedTask }
    />
    <Footer allTasks={ allTasks } clearAllTasks={ clearAllTasks } />
    </section>
    </section>
    </>
  )
}