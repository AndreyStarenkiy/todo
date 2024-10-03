import React from 'react';

/* const Task = (label) => <span>{label.label}</span>; */

export default class Task extends React.Component {
  render() {
    return <span>{this.props.label}</span>;
  }
}
