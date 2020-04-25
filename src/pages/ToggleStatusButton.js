import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../store/todos/todos.actions';

const ToggleButton = ({id, completed, onClick}) => (
<button onClick={onClick} className={ completed ? 'archived' : 'active' }>
{ completed ? 'Activate' : 'Archive' }
</button>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(toggleTodo(ownProps.id))
});


export default connect(null, mapDispatchToProps)(ToggleButton);