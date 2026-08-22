// interface UserProps{
//     name : string,
//     age : number,
//     clickHandler : () => void,
// }

// export default function User(props : UserProps) {
//     const {name , age, clickHandler} = props; // 
//     return (
//         <>
//             <h1>name : {name}</h1>
//             <h2>age : {age}</h2>
//             <button onClick={clickHandler}>클릭하세요</button>
//         </>
//     )
// }

type UserProps = {
  name : string,
  age : number,
  body : string,
  clickHandler : () => void;
}

import React from 'react'

export default function User({name, age, body, clickHandler} : UserProps) {
  return (
    <div>
      <h1>name : {name}</h1>
      <h2>age : {age}</h2>
      <h3>body : {body}</h3>
      <button onClick={clickHandler}>click</button>
    </div>
  )
}















































