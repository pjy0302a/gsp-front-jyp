import React, { Component } from 'react';
import './App.css';
import { useState } from "react";
import TodoHeader from './TodoHeader.js';
import TodoNav from './TodoNav.js';
import TodoList from './TodoList.js';
import TodoListOne from './TodoListOne.js';

//서버에서 받아올 임의 데이터 
let data = [
    {id:'1', title:'마트가서 장봐오기', hashCode:['#심부름','#용돈', '#떡볶이'], time:'30분30초',status:'할 것', isPrint: true},
    {id:'2', title:'피시방가서 게임하기', hashCode:['#피시방','#스타', '#롤'], time:'15분30초', status:'할 것', isPrint: true},
    {id:'3', title:'찜질방가서 잠자기', hashCode:['#찜질방','#식혜', '#계란'], time:'10분30초', status:'끝낼 것', isPrint: true},
]


function App() {

  const [todoList, setTodoList] = useState(data);
  

  return ( 
    <div>
      <TodoHeader name="박진영"></TodoHeader>
      <TodoNav></TodoNav>

      {/* button click event */}
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
      />

      {/* list print */}
      <TodoListOne todoList={todoList}></TodoListOne> 
    </div>
    
  );
}

export default App;
