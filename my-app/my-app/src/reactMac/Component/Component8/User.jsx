// import React from 'react'

// export default function User(props) {
//     return (
//         <h1>
//             name : {props.UserObj.name}<br/>
//             age : {props.UserObj.age}<br/>

//             <button onClick={props.clickHandler}>클릭</button>
//         </h1>
        
//     )
// }

import React from 'react'

export default function User(props) {
  return (
    <>
      <h1>name : {props.Obj.name}</h1>
      <h2>age : {props.Obj.age}</h2>
      <h3>body : {props.Obj.body}</h3>
      <button onClick={props.Handler}>click</button>
    </>
  )
}






































