// import React from 'react'
// import { useState } from 'react'

// export default function Text() {
//     const [count, setCount] = useState(0);

//     // 증감 0이상 파랑색
//     const handlerIncrease = () => {
//         setCount((count) => count + 1);
//     }
    
//     // 감소 0이하 빨강색, 0으로 안 떨어지게
//     const handlerDecrease = () => {
//         if(count > 0){
//             setCount((count) => count - 1);
//         }
//     }

//     const color = count > 0 ? 'blue' : 'red';
//   return (
//     <>
//         <h1 style={{ color }}>Count : {count}</h1>
//         <button onClick={handlerIncrease}>증가</button>
//         <button onClick={handlerDecrease}>감소</button>
//     </>
//   )
// }



// import React from 'react'

// export default function Text() {
//     const [count, setCount] = React.useState(0);

//     const handlerClickPlus = () => {
//         setCount((count) => count + 1)
//     }

//     const handlerClickMinus = () => {
//         setCount((count) => count - 1)
//     }

//     const result = count > 0 ? '양수' : count === 0 ? '0입니다' : '음수';
//   return (
//     <>
//         <h1>현재 스코어 : {count}입니다</h1>
//         <p>결과 : {result}</p>
//         <button onClick={handlerClickPlus}>+</button>
//         <button onClick={handlerClickMinus}>-</button>
//     </>
//   )
// }


import React from 'react'
import { useState } from 'react'

export default function text() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const handlerChange = (e) => {
        setInput(e.target.value); // input의 value값을 input state에 저장
    }

    const handlerAdd = () => {
        if(input === '') return // input이 빈 문자열이면 추가하지 않음

        setList((list) => [...list, input]); // list state에 input값 추가
        setInput(''); // input 초기화
    }
  return (
    <>
        <input type="text" value={input} onChange={handlerChange}/>
        <button onClick={handlerAdd}>추가하기</button>

        {list.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </>
  )
}


