// import React from 'react'

// export default function Text() {
//   const handleButtonClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     e.stopPropagation();
//     console.log('버튼 클릭')
//   }
//   return (
//     <div onClick={() => console.log("부모 클릭")}>
//       <button onClick={handleButtonClick}>
//         클릭
//       </button>
//     </div>
//   );
// }


import React from 'react'

export default function Text() {
  const handlerButtonClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    console.log('버튼 클릭');
  }
  return (
    <div onClick={() => console.log('부모 클릭')}>
      <button onClick={handlerButtonClick}>클릭</button>
    </div>
  )
}
