import React, { Component } from 'react';


class AddTodo extends Component {
  constructor({ submit }) {
    super();

    this.state = { value: ''};

  }

  inputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.submit(e, this.state.value)}>
          <input value={this.state.value} onChange={this.inputChange.bind(this)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

}
  


export default AddTodo;