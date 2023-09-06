import React, { useState, useRef } from 'react';

function TodoListOne(props) {

    function Data({ workList }) {
      return (
        <div>
          <span>{workList.title}</span>, 
          <span>{workList.hashCode}</span>, 
          <span>{workList.time}</span>, 
          <span>{workList.status}</span>
        </div>
      );
    }
  
  const printList = props.todoList.filter(el => el.isPrint);

    return (
        <div>
          {printList.map((workList, idx) => (
            <Data
              key={idx}
              workList={workList}
            />
          ))}
        </div>
      );
}

export default TodoListOne;