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

import React from 'react'

type userType = {
  name : string,
  age : number,
  body : string,
  Click : () => void;
}

export default function User({name,age,body,Click} : userType) {
  return (
    <div>
      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>body : {body}</p>
      <button onClick={Click}>click</button>
    </div>
  )
}

















































