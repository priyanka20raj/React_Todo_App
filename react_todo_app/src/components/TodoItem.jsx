import React from 'react'
import "./styles.css";

function TodoItem(props) {
    const { todo, index,handleRemoveClick } =props;
  return (
    <div className='todo-box'>
      <span className='todo-para'>{`${index+1}. ${todo}`}</span>
      <button onClick={() =>handleRemoveClick(index)}className="remove-btn" type='button'>X</button>
    </div>
  )
}

export default TodoItem