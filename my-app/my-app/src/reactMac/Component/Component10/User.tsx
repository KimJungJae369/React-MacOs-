// interface UserProps{
//     name : string,
//     age : number,
//     clickHandler : () => void,
// }

// export default function User(props : UserProps) {
//     const {name , age, clickHandler} = props; // 비구조화 할당 
//     return (
//         <>
//             <h1>name : {name}</h1>
//             <h2>age : {age}</h2>
//             <button onClick={clickHandler}>클릭하세요</button>
//         </>
//     )
// }

import React from 'react'

type UserProps = {
  name : string,
  age : number,
  body : string,
  Handler : () => void;
}

export default function User(props : UserProps) {
  const {name, age, body, Handler} = props;
  return (
    <>
        <h1>name : {name}</h1>
        <h2>age : {age}</h2>
        <h3>body : {body}</h3>
        <button onClick={Handler}>click</button>
    </>
  )
}






































