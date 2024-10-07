import React from 'react';
import Task from '../task/task';

const TaskList = (props) => {
  console.log('privet');
  console.log(props);
  const elements = props.map((item) => (
    <li key={item.id}>
      <Task props={item} />
    </li>
  ));

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
