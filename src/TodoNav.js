function TodoNav() {
    //HEADER 숨기기 버튼
    //할 것 버튼, 추가 버튼, 끝낼것 버튼
    return <div>
        <div><img src="image/showbutton.png"  width="50px" height="50px"/></div>
        <span>할 것</span>
        <img className="addButton" width="150px" height="50px" src="image/addButton.png"/>
        <span>끝낼 것</span>
    </div>
}

export default TodoNav;