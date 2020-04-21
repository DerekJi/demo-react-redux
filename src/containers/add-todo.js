import { connect } from 'react-redux';
import AddTodo from '../components/add-todo';
import { addTodo } from '../actions';

const mapDispatchToProps = dispatch => ({
  submit: (e, value) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    dispatch(addTodo(value));
    value = '';
  }
});

export default connect(null, mapDispatchToProps)(AddTodo);
