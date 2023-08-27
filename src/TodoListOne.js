import React, { useState, useRef } from 'react';

function TodoListOne() {
    //서버에서 받아올 임의 데이터 
    let data = [
        {id:'1', title:'마트가서 장봐오기', hashCode:['#심부름','#용돈', '#떡볶이'], time:'30분30초',status:'할 것'},
        {id:'2', title:'피시방가서 게임하기', hashCode:['#피시방','#스타', '#롤'], time:'15분30초', status:'할 것'},
        {id:'3', title:'찜질방가서 잠자기', hashCode:['#찜질방','#식혜', '#계란'], time:'10분30초', status:'끝낼 것'},
    ]
    let [toDo, toFinish] = useState(data);


      function Data({ data }) {
        return (
            <div>
            <p>{data.title}</p>
            <p>{data.hashCode}</p>
            <p>{data.title}</p> ;
    </div>
        );
      }
      

    //         if (data[i].status === '할 것') {
    //             content += <div><p>data[i].title</p>
    //             <p>data[i].hashCode</p>
    //             <p>data[i].time</p>
    //             </div>;
    //         }
    //     }
    // } else {
    //     for (let i = 0; i < data.length; i++) {
    //         if (data[i].status === '끝낼 것') {
    //             content += <div><p>data[i].title</p>
    //             <p>data[i].hashCode</p>
    //             <p>data[i].time</p>
    //             </div>;
    //         }
    //     }
    // }
    return (
        <div>
          {data.map(data => (
            <Data data={data} />
          ))}
        </div>
      );
}

export default TodoListOne;