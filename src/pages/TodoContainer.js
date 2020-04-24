import React from 'react';
import { connect } from 'react-redux';

const Todo = ({ todos }) => {
  return (
    <div className="d-todos">
      Todo Container

    </div>
  );
};

const mapStatesToProps = (states) => {
  return {
    todos: states.todos
  };
};


export default connect(mapStatesToProps, null)(Todo);

