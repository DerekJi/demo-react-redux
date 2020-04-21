import React from 'react';


const AddTodo = ({ submit }) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => submit(e, input)}>
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;