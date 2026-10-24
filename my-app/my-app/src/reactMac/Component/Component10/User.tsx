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

type UserType = {
  name : string,
  age : number,
  body : string
  Handler : () => void
}

export default function User(props : UserType) {
  const {name, age, body, Handler} = props;
  return (
    <div>
        <p>name : {name}</p>
        <p>age : {age}</p>
        <p>body : {body}</p>
        <button onClick={Handler}>click</button>
    </div>
  )
}


















































