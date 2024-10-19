import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import TodoApp from './components/todoapp/todoapp';
import { useEffect, useState } from 'react';
import uniqueId from 'lodash/uniqueId';

export default function App () {
  const [tasks, setTasks] = useState([]); 
  const [allTasks, setAllTasks] = useState(0);
  
  useEffect( () => {
    setFiltred(tasks)
  }, [tasks])
  
  const handleNameChangeFunc = (tasks) => {
    setTasks(prevState => ([...prevState, { id: uniqueId('task_'), text: tasks, done: false, created: Date.now(), edited: false }]));
    setAllTasks(allTasks + 1);
  }

  const toggleTask = (id) => { 
    setTasks(tasks.map(task => { 
      if (task.id !== id) return task; 
  
      const newDoneStatus = !task.done; 
  
      setAllTasks(prevAllTasks => newDoneStatus ? prevAllTasks - 1 : prevAllTasks + 1); 
  
      return { 
        ...task, 
        done: newDoneStatus
      }; 
    })); 
  };

  const editedModeOn = (id) => {
    setTasks(tasks.map(task => {
      if (task.id !== id) return task;

      return {
        ...task,
        edited: true
      }
    }));
  }


  const editedTask = (id, newText) => {
    setTasks(tasks.map(task => {
       if (task.id !== id) return task;
 
       return {
          ...task,
          text: newText,
          edited: false 
       };
    }));
 };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    setAllTasks(allTasks - 1);
  }

  const clearCompletedTasks = () => {
    setTasks(prevTasks => {
        const activeTasks = prevTasks.filter(task => !task.done); 
        setAllTasks(activeTasks.length);
        return activeTasks;
    });
};

  const [filtred, setFiltred] = useState(tasks);

  const taskFilter = (status) => {
    if (status === 'all') {
       setFiltred([...tasks]); 
    } else {
       const filteredTasks = tasks.filter(task => task.done === status);
       setFiltred([...filteredTasks]);
    }
 };

  return (
    <>
      <section className="todoapp">
    <Header handleNameChange={ handleNameChangeFunc } />
    <section className="main">
    <TodoApp tasks={ tasks } 
    filtred={ filtred }
    toggleTask={ toggleTask }
    removeTask={ removeTask } 
    editedModeOn={ editedModeOn }
    editedTask={ editedTask }
    />
    <Footer allTasks={ allTasks } 
    clearCompletedTasks={ clearCompletedTasks } 
    taskFilter={ taskFilter }
    />
    </section>
    </section>
    </>
  )
}