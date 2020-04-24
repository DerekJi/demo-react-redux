import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from '../store/todos/todos.actions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }

  onValueChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addTodo(this.state.value));
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="d-add-todo d-panel">
      <b>AddTodo</b>
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" value={this.state.value} onChange={(e) => this.onValueChange(e)}/>
        <button type="submit">Add Todo</button>
      </form>
      
    </div>
    );
  }

}

AddTodo.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(AddTodo);