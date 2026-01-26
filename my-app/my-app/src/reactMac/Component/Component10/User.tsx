// interface UserProps{
//     name : string,
//     age : number,
//     clickHandler : () => void,
// }

// export default function User(props : UserProps) {
//     const {name , age, clickHandler} = props;
//     return (
//         <>
//             <h1>name : {name}</h1>
//             <h2>age : {age}</h2>
//             <button onClick={clickHandler}>클릭하세요</button>
//         </>
//     )
// }

type UserProps = {
  UserObj : {
    name : string,
    age : number,
    body : string,
  },
  Handler : () => void
}

import React from 'react'

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







































