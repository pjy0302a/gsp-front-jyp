import React, { Component } from 'react';
import './App.css';
import { useState } from "react";
import TodoHeader from './TodoHeader.js';
import TodoNav from './TodoNav.js';
import TodoList from './TodoList.js';
import TodoListOne from './TodoListOne.js';

function AddButton(){
  //Create 버튼을 클릭하면 카드추가 입력 modal 생성
  return <div>
      <button>+</button>
    </div>
}

function List(){
  //Read
  return <div>1</div>
}

function ListOne(){
  return <div>12</div>
}

function App() {
  return ( 
    <div>
      <TodoHeader></TodoHeader>
      <TodoNav></TodoNav>
      <TodoList></TodoList>
      <TodoListOne></TodoListOne> 
    </div>
    
  );
}

export default App;
