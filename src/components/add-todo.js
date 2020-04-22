import React, { Component } from 'react';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor({ dispatch }) {
    super();

    this.state = { value: ''};

  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    this.props.dispatch(addTodo(this.state.value));
    this.setState({ value: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input value={this.state.value} onChange={this.onInputChange.bind(this)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

}
  


export default AddTodo;