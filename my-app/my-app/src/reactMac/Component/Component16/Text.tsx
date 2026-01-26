// import React from 'react'
// import Button from './Button'

// export default function Text() {
//   return (
//     <>
//         <Button handlerClick={() => alert('login')}>login</Button>
//         <Button handlerClick={() => alert('logout')}>logout</Button>
//     </>
//   )
// }

{/* 
        text
        1. 버튼(button)을 렌더링하는 Button 컴포넌트 2개 만들기
        2. Button 컴포넌트에는 버튼을 내용과 이벤트 핸들러를 전달
        3. Button 컴포넌트는 부모 컴포넌트에서 전달한 내용과 이벤트 핸들러를 받아 내용은 렌더링하고 이벤트 핸들러는 클릭 이벤트 속성에 할당
        4. 버튼을 클릭하면 부모 컴포넌트 에서 전달받은 이벤트 핸들러가 실행된다 이벤트 핸들러의 로직은 자유롭게 구현
      */}

import React from 'react'
import Button from './Button'

export default function Text() {
  return (
    <>
      <Button handlerLCick = {() => alert('login')}>login</Button>
      <Button handlerLCick = {() => alert('logout')}>logout</Button>
    </>
  )
}








