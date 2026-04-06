// import React from 'react'

// export default function UserCard({name, age, color, children} : {name: string, age: number, color: string, children: React.ReactNode}) {
//     const handlerCardClick = () => {
//         console.log('카드 클릭 : ', name)
//     }


//     const handlerDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.stopPropagation();
//         console.log('카드 삭제 : ', name)
//     }

//     const handlerLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
//         e.stopPropagation();
//         console.log('이동막기')
//     }
//   return (
//     <div onClick={handlerCardClick}>
//         <h1>name : {name}</h1>
//         <h2>age : {age}</h2>
//         <h3 style={{color : color}}>color : {color}</h3>

//         {children}

//         <button onClick={handlerDelete}>삭제</button>

//         <br />

//         <a href="https://www.naver.com" onClick={handlerLink}>네이버로 이동</a>
//     </div>
//   )
// }

import React from 'react'

export default function UserCard({children, title} : {children : React.ReactNode, title : string}) {
    const handlerBoxClick = () => {
        console.log('박스 클릭');
    }

    const handlerButtonClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        console.log('버튼 클릭');
    }
  return (
    <>
        <button onClick={handlerBoxClick}>
            {title}
            <button onClick={handlerButtonClick}>버튼</button>
        </button>
    </>
  )
}
