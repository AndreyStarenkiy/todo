import React from 'react';

/* const Task = (label) => <span>{label.label}</span>; */

export default class Task extends React.Component {
  render() {
    let label = this.props.label;

    return (
      <div className="view" key={this.props.id}>
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description" label={label} />
          <span className="created">created ? seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    );
  }
}
