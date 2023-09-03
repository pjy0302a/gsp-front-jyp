import { useState } from 'react';
import TodoListOne from './TodoListOne.js';

function TodoList(props) {
    // 할 것, 끝낼 것 버튼을 클릭 시 status에 따라
    // 지정된 모든리스트를 보여준다.
    // 할 것 인경우 time이 실시간으로 보여주고
    // 끝낼 것 인경우 time이 완료로 변경
    
    const clickStatus = (isEnd) => {
        console.log('status가 할 것 출력하기');
        console.log(props)

        let originList = [...props.todoList];
        if(isEnd === 'init')
            originList.forEach((todo) => {
                todo.isPrint = true;
            });
        if(isEnd === 'notEnd')
            originList.forEach((todo) => {
                if (todo.status === '할 것')
                    todo.isPrint = true;
                else todo.isPrint = false;
            });
        if(isEnd === 'end')
            originList.forEach((todo) => {
                if (todo.status === '할 것')
                    todo.isPrint = false;
                else todo.isPrint = true;
            });
        console.log(originList)

        props.setTodoList(originList);
    } 
    // 
    return <div>
        <button name='toStart' onClick={() => clickStatus('init')}>전체</button>
        <button name='toStart' onClick={() => clickStatus('notEnd')}>할 것</button>
        <img className="addButton" onClick={() => {
            // 값을 입력받고
            // useRef / <input />

            // todoList 넣을 { ... } 만들고
            let addData = {
                id: '1',
                title: '마트가서 장봐오기',
                hashCode: ['#심부름', '#용돈', '#떡볶이'],
                time: '30분30초',
                status: '할 것',
                isPrint: true
            };
            
            // 기존의 data(todoList state값에 만든 데이터를 추가해서)
            const newList = [...props.todoList, addData];

            // setTodoList 넣는다.
            props.setTodoList(newList);
        }} width="150px" height="50px" src="image/addButton.png"/>
        <button name='toEnd' onClick={() => clickStatus('end')}>끝낼 것</button>
        
    </div>
}

export default TodoList;