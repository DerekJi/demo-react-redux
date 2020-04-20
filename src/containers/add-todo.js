import { connect } from 'react-redux'
import AddTodo from '../components/add-todo';
import { addTodo } from '../actions';

const mapDispatchToProps = dispatch => ({
  submit: (e, input) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }
});

export default connect(null, mapDispatchToProps)(AddTodo);
