// import React from 'react'

// interface UsercardProps{
//   name : string,
//   age : number,
//   isObject : boolean
// }

// export default function UserCard({name, age, isObject} : UsercardProps) {
//   return (
//     <>
//       <div 
//         style={{
//           border : "1px solid #333",
//           marginTop : 10,
//           padding : 20,
//           textAlign : 'center'
//         }}
//       >
//         <p>이름 : {name}</p>
//         <p>skdl : {age}</p>
//         <p>
//           상태 : {isObject ? '활성' : '비활성'}
//         </p>
//       </div>      
//     </>
//   )
// }

type UserProsp = {
  name : string,
  age : number,
  isObject : boolean
}

import React from 'react'

export default function UserCard(props : UserProsp) {

  return (
    <div style={{
      border : '1px solid #333',
      marginTop : 10,
      padding : 20,
      textAlign : 'center'
    }}>
      <p>이름 : {props.name}</p>
      <p>나이 : {props.age}</p>
      <p>
        상태 : {props.isObject ? '활성' : '비활성'}
      </p>
    </div>
  )
}
