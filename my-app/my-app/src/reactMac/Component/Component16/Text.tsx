import CommentCard from './CommentCard'

// export default function Text() {
//   const handleBuy = (name : string) => {
//     console.log(`${name} 구매`)
//   }

//   const handlerCardClick = () => {
//     console.log('카드를 클릭했습니다');
//   }

//   const handlerCardCapture = () => {
//     console.log('캡처링');
//   }
//   return (
//     <div>
//         <CommentCard
//             title="상품 정보"
//             backgroundColor="pink"
//             buttonText="구매하기"
//             productName="맥북 프로"
//             onBuy={handleBuy}
//             onCardClick={handlerCardClick}
//             onCardCapturn={handlerCardCapture}
//         >
//             <p>M4 Pro 24GB</p>

//             <a href="https://google.com">
//                 자세히 보기
//             </a>
//         </CommentCard>
//     </div>
//   )
// }


import React from 'react'

export default function Text() {
  const handleBuy = () => {
    console.log(`${name} 구매`)
  }

  const handlerCardClick = () => {
    console.log('카드를 클릭했습니다');
  }
  
  const handlerCardCapture = () => {
    console.log('캡처링');
  }
  return (
    <div>
      <CommentCard
        title="상품 정보"
        backgroundColor="pink"
        buttonText="구매하기"
        productName="맥북 프로"
        onBuy={handleBuy}
        onCardClick={handlerCardClick}
        onCardCapturn={handlerCardCapture}
      >
        <p>M4 Pro 24GB</p>
        <a href="https://google.com">자세히 보기</a>
      </CommentCard>
    </div>
  )
}


/*
  HTMLAnchorElement
  = <a> 태그(링크)를 가리키는 정식 이름
*/
