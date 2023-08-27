import TodoListOne from './TodoListOne.js';

function TodoList() {
    // 할 것, 끝낼 것 버튼을 클릭 시 status에 따라
    // 지정된 모든리스트를 보여준다. 
    // 할 것 인경우 time이 실시간으로 보여주고
    // 끝낼 것 인경우 time이 완료로 변경
    return <div>
        <button>할 것</button>
        <img className="addButton" width="150px" height="50px" src="image/addButton.png"/>
        <button>끝낼 것</button>
        
    </div>
}

export default TodoList;