import './App.css';
import { useState } from "react";

function Header(props){
  console.log(props.title);
  const [text, setText] = useState("");
  const [name, setName] = useState("noName");
  console.log(name);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleReset = () => {
    setText("");
  };
  const handleConfirm = () => {
    setName(text);
  };
  return <header>
    <div>
         {name === props.title ? (
          <input
            onChange={handleChange}
            placeholder="이름을 입력하시오"
            value={text || ""}
          />
        ) : (
          <div>{name}님 환영합니다!</div>
        )}
      <button onClick={handleReset}>초기화</button>
      <button onClick={handleConfirm}>등록</button>
      </div>

    </header>
}

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
      <Header title="noName"></Header>
      <AddButton></AddButton>
      <List></List>
      <ListOne></ListOne> 
    </div>
    
  );
}

export default App;
