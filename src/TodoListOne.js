import React, { useState, useRef } from 'react';

function TodoListOne() {
    //서버에서 받아올 임의 데이터 
    let data = [
        {id:'1', title:'마트가서 장봐오기', hashCode:['#심부름','#용돈', '#떡볶이'], time:'30분30초',status:'할 것'},
        {id:'2', title:'피시방가서 게임하기', hashCode:['#피시방','#스타', '#롤'], time:'15분30초', status:'할 것'},
        {id:'3', title:'찜질방가서 잠자기', hashCode:['#찜질방','#식혜', '#계란'], time:'10분30초', status:'끝낼 것'},
    ]
    let [toDo, toFinish] = useState(data);
    //fiter로 
    let workList = toDo.filter((list) => list.status ==='할 것');
      function Data({ workList }) {
        return (
            <div>
            <p>{workList.title}</p>
            <p>{workList.hashCode}</p>
            <p>{workList.time}</p>
    </div>
        );
      }
    return (
        <div>
          {workList.map(workList => (
            <Data workList={workList} />
          ))}
        </div>
      );
}

export default TodoListOne;