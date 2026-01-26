// import React from 'react'

// export default function User(props: UserProps) {
//   const {
//     UserObj: { name, age },
//     clickHandler,
//   } = props;
//   return (
//     <>
//       <h4>name : {name}</h4>
//       <h5>age : {age}</h5>
//       <button onClick={clickHandler}>클릭하세요</button>
//     </>
//   )
// }

import React from 'react'

export default function User(props : UserProps) {
  const {
    Obj : {name, age, body},
    Handler
  } = props;
  return (
    <>
      <h1>name : {name}</h1>
      <h2>age : {age}</h2>
      <h3>body : {body}</h3>
      <button onClick={Handler}>click</button>
    </>
  )
}

























