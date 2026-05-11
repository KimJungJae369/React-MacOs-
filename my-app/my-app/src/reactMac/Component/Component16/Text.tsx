// /*
//   FormEvent<HTMLFormElement> : 폼 요소에서 발생하는 이벤트를 나타내는 타입입니다.
//   HTMLFormElement : HTML의 <form> 요소를 나타내는 타입입니다. 
//   폼 요소에서 발생하는 이벤트 객체의 타입을 지정할 때 사용됩니다.

//   HTMLAnchorElement : HTML의 <a> 요소를 나타내는 타입입니다.
//   앵커 요소에서 발생하는 이벤트 객체의 타입을 지정할 때 사용됩니다.
// */

// import React from 'react'

// export default function Text() {
//   const handlerAppClick = () => {
//     console.log('App Clicked')
//   }

//   const handlerCardClick = () => {
//     console.log('Card Clicked')
//   }

//   const handlerBtnClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     console.log('Btn Clicked');
//     e.stopPropagation();
//     e.preventDefault();
//   }

//   const handlerAppClickCapture = () => {
//     console.log('App CapClicked')
//   }

//   const handlerCardClickCapture = () => {
//     console.log('Card CapClicked')
//   }
//   return (
//     <div 
//       onClick={handlerAppClick}
//       onClickCapture={handlerAppClickCapture}
//       style={{
//         border : '1px solid #fff',
//         marginTop : 10,
//         padding : 10,
//         textAlign : 'center'
//       }}
//     >
//     App
//     <div
//       onClick={handlerCardClick}
//       onClickCapture={handlerCardClickCapture}
//       style={{
//         border : '1px solid #fff',
//         marginTop : 10,
//         padding : 10,
//         textAlign : 'center'
//       }}
//     >
//       Card
//     </div>
//     <button onClick={handlerBtnClick} style={{border : '1px solid #fff', marginTop : 10, padding : 10, textAlign : 'center'}}>Button</button>
//     </div>
//   )
// }


import React from 'react'

export default function Text() {
  const handlerAppClick = () => {
    console.log('App Clicked')
  }
  
  const handlerButtonClick = () => {
    console.log('Button Clicked')
  }


  const handlerCardClick = (e : React.MouseEvent<HTMLDivElement>) => {
    console.log('Card Clicked')
    e.stopPropagation();
    e.preventDefault();
  }

  const handlerAppClickCapture = () => {
    console.log('App CapClicked')
  }

  const handlerCardClickCapture = () => {
    console.log('Card CapClicked')
  }
  return (
    <div style={{
      border : '1px solid #fff',
      marginTop : 10,
      padding : 10,
      textAlign : 'center'
    }}>
      <button onClick={handlerButtonClick}>Button</button>
      <div
        onClick={handlerCardClick}
        onClickCapture={handlerCardClickCapture}
        style={{
          border : '1px solid #fff',
          marginTop : 10,
          padding : 10,
          textAlign : 'center'
        }}
      >
        Card
      </div>

      <div
        onClick={handlerAppClick}
        onClickCapture={handlerAppClickCapture}
        style={{
          border : '1px solid #fff',
          marginTop : 10,
          padding : 10,
          textAlign : 'center'
        }}
      >
        App
      </div>
    </div>
  )
}
