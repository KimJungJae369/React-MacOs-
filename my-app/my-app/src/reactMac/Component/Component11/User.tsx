// // 1. 일반 칠드런 : export default function User(props : {children : React.ReactNode}) {
// // 2. 구조 분해 할당 사용 : export default function User({children} : {children : React.ReactNode}){
//     return (
//         <>
//             {/* 1. {props.children} */}
//             {/* 2. {children} */}
//         </>
//     )
// }

// 3. 타입정의 추가 + 일반 속성도 함께 받기
// import React from 'react'

// export default function User({title,children} : {title : string, children : React.ReactNode}) {
//     return (
//         <>
//             <h1>{title}</h1>
//             {children}
//         </>
//     )
// }

import React from 'react'

export default function User({children,title} : {children:React.ReactNode, title: string}) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}




















