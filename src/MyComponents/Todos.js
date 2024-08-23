import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className='container my-3'>
      <h3 className="my-3">Todo List Made by Kunal</h3>
      {props.todos.length === 0 ? (
        "No Todos To Display"
      ) : (
        props.todos.map((todo) => {
          return (
            <React.Fragment key={todo.id}>
              <TodoItem todo={todo} onDelete={props.onDelete} />
              <hr />
            </React.Fragment>
          );
        })
      )}
    </div>
  );
}

export default Todos;
