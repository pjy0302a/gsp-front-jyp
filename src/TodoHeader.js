import { useState, useEffect  } from "react";

function TodoHeader(props) {
    // #이미지, 진척도, 설정이미지
    // 닉네임 TEXT
    // 부가설명 TEXT
    console.log(props.name);
    let name = props.name;

    
    return  <header>
        <div>
        {props.name}님 환영합니다!
        </div>
    </header> 
}

TodoHeader.defaultProps = {
    props : ''
};
export default TodoHeader;