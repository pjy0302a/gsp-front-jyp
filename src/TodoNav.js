import React, { useState, useRef } from 'react';

function TodoNav() {
    const [_alt, _setAlt] = useState('show');
    const thisAlt = useRef();
    //HEADER 숨기기 버튼
    //할 것 버튼, 추가 버튼, 끝낼것 버튼
    const statusChange = (e) => {  // alt 가 show 일 시 hide상태로 변경, hide 일시 show 상태로 변경 
                                   //<header></header> 보이게 안보이게 image/showbutton.png => image/hidebutton.png
        if (e.target.alt === 'show') {
            //e.target.alt = 'hide';
        } else {
            //e.target.alt('show');
        }
      };
    return <div>
        <div>
            <img src="image/showbutton.png" id="show" alt="show" width="50px" height="50px" onClick={statusChange}/>
        </div>

    </div>
}

export default TodoNav;