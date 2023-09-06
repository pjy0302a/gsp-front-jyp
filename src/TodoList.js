import { useRef, useState } from 'react';
import TodoListOne from './TodoListOne.js';

function TodoList(props) {
    // 할 것, 끝낼 것 버튼을 클릭 시 status에 따라
    // 지정된 모든리스트를 보여준다.
    // 할 것 인경우 time이 실시간으로 보여주고
    // 끝낼 것 인경우 time이 완료로 변경

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();


    const [isInputMode, setIsInputMode] = useState(false);
    const [hashCodeVal, setHashCodeVal] = useState('');
    
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
        <div>
            <button name='toStart' onClick={() => clickStatus('init')}>전체</button>
            <button name='toStart' onClick={() => clickStatus('notEnd')}>할 것</button>
            <img className="addButton" onClick={() => {
                // 버튼을 눌렀을 때 입력창이 노출된다
                // {id:'1', title:'마트가서 장봐오기', hashCode:['#심부름','#용돈', '#떡볶이'], time:'30분30초',status:'할 것', isPrint: true},
                setIsInputMode(!isInputMode);
                // setTodoList 넣는다.
                
            }} width="150px" height="50px" src="image/addButton.png" />
            <button name='toEnd' onClick={() => clickStatus('end')}>끝낼 것</button>
        </div>
        {
            isInputMode ? 
            <div>
                <input type='text' placeholder='title 입력' ref={ref1}></input>
                <input type='text' placeholder='hashCode 입력' ref={ref2} value={hashCodeVal} onChange={(e) => setHashCodeVal(e.target.value)}></input>
                <input type='text' placeholder='time 입력' ref={ref3}></input>
                <input type='button' value={'입력'} onClick={() => {
                        console.log('clicked') 
                        let insertData = {
                            id: props.todoList.length + 1,
                            title: '',
                            hashCode: '',
                            time: '',
                            status: '할 것',
                            isPrint: true,
                        }
                        
                        // 위에 입력된 값들을 들고와서
                        console.log(ref1.current.value);
                        console.log(ref2.current.value);
                        console.log(ref3.current.value);
                        const titleValue = ref1.current.value;
                        // const hashCodeValue = ref2.current.value;
                        const hashCodeValue = hashCodeVal;
                        const timeValue = ref3.current.value;                        

                        // 할일을 만들어준다.
                        insertData.title = titleValue;
                        insertData.hashCode = hashCodeValue.split(',');
                        insertData.time = timeValue;

                        console.log(insertData);

                        // state 초기화를 해주자
                        setHashCodeVal('');

                        // todoList에 추가해준다
                        props.setTodoList([...props.todoList, insertData]);

                        // input 값 초기화 -> 숨기기

                        setIsInputMode(!isInputMode);
                }} />    
            </div> : <></> 
        }
        
    </div>
}

export default TodoList;