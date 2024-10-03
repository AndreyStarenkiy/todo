import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// import TodoHeader from './components/todo-header/todo-header.js';
import NewTaskForm from './components/new-task-form/new-task-form';
import TaskList from './components/task-list/task-list';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('wrapper'));

function ToDoApp() {
  const preList = {
    important: true,
    label: 'Todoshka',
  };

  return (
    <section id="todoapp" className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList { ...preList }/>
        <Footer />
      </section>
    </section>
  );
}

/* const el = (
  <div className='todo'>
    <h1>To-do list!</h1>
    <input placeholder='Start writing...'></input>
    <ul>
      <li>First thing's first</li>
      <li>Last thing's last</li>
    </ul>
  </div>
);
console.log(el);      */

root.render(<ToDoApp />);
