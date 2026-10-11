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
        <p>name : {props.Obj.name}</p>
        <p>age : {props.Obj.age}</p>
        <p>body : {props.Obj.body}</p>
        <button onClick={props.click}>click</button>
    </>
  )
}







































