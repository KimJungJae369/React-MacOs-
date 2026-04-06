// import React from 'react'
// import Button from './Button'
// import UserCard from './UserCard'

// export default function Text() {
//   const users = [
//     {name : '만수', age : 25, color : 'blue'},
//     {name : '영희', age : 30, color : 'red'},
//   ]
//   return (
//     <>
//         {users.map((user, index) => (
//           <Button key={index}>
//             <UserCard {...user}>
//                 <p>추가 내용</p>
//             </UserCard>
//           </Button>
//         ))}
//     </>
//   )
// }
// HTMLAnchorElement : a 태그의 이벤트 객체 타입

import React from 'react'
import UserCard from './UserCard'

export default function Text() {
 
  return (
    <>
      <UserCard title="테스트">
        <button>클릭</button>
      </UserCard>
    </>
  )
}





