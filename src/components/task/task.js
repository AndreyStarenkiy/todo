import React, { Component } from 'react';

/* const Task = (label) => <span>{label.label}</span>; */

export default class Task extends Component {
  state = {
    done: false,
  };

  onClickDone = () => {
    this.setState({
      done: true,
    });
    console.log(this.state);
  };

  render() {
    const { label } = this.props.props;
    const { done } = this.props.props;
    console.log(label);

    let classNames = 'description';

    if (done) {
      console.log('done is true');
      classNames += ' completed';
    }

    return (
      <div className='view' key={this.props.id} onClick={ this.onClickDone }>
        <input className="toggle" type="checkbox" onClick={ this.onClickDone }/>
        <label>
          <span className={classNames}>{ label }</span>
          <span className="created">created ? seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    );
  }
}
