// import React from 'react'
// import UserCard from './UserCard'


// export default function Text() {
//   const user = [
//     {name : '홍길동', age : 20, isObject : true},
//     {name : '김철수', age : 30, isObject : false},
//     {name : '이영희', age : 40, isObject : true},
//   ]
//   return (
//     <>
//       {user.map((item,index) => (
//         <UserCard key={index} 
//           {...item}
//         />
//       ))}
//     </>
//   )
// }


import React from 'react'
import UserCard from './UserCard'

export default function Text() {
  const user = [
    {name : '홍길동', age : 20, isObject : true},
    {name : '김철수', age : 30, isObject : false},
    {name : '이영희', age : 40, isObject : true},
  ]
  return (
    <div>
      {user.map((item, index) => (
        <UserCard key={index} {...item}/>
      ))}
    </div>
  )
}
