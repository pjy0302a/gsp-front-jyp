function TodoListOne() {
    //서버에서 받아올 임의 데이터 
    let data = [
        {id:'1', title:'마트가서 장봐오기', hashCode:['#심부름','#용돈', '#떡볶이'], time:'30분30초'}
    ]
    return <div>
           <p>{data[0].time}</p>
           <p>{data[0].title}</p>
           <p>{data[0].hashCode}</p>
    </div>
}

export default TodoListOne;