// import React from 'react'

// type CommentCardType = {
//     title : string,
//     price : number,
//     brand : string 
//     onBuy : () => void,
//     onCardClick  : () => void,
//     children : React.ReactNode
// }

// export default function CommentCard({title,price,brand,onBuy,onCardClick,children} : CommentCardType) {
//     const handlerBuy = (e : React.MouseEvent<HTMLButtonElement>) => {
//         const trag = e.currentTarget as HTMLElement; 
//         // const trag = e.currentTarget as HTMLElement : 이벤트가 발생한 요소를 HTMLElement로 타입 단언
//         // currentTarget : 이벤트가 발생한 요소를 가리킴
//         console.log(trag.innerText);
//         e.stopPropagation();
//         onBuy();
//     } 

//     const handleLink = (e : React.MouseEvent<HTMLAnchorElement>) => {
//         e.preventDefault();
//         e.stopPropagation();
//         const targ = e.currentTarget as HTMLElement
//         console.log(targ.innerText);
//     }
//   return (
//     <div
//         onClickCapture={() => console.log('상품 카드 캡처링')}
//         onClick={onCardClick}
//     >
//         <h1>{brand}</h1>
//         <h2>{title}</h2>
//         <p>가격 : {price.toLocaleString()}원</p>
//         <p>추가정보 : {React.Children.count(children)}개</p>
//         {children}
//         <a href="https://naver.com" onClick={handleLink}>상품 상세페이지</a>
//         <br />
//         <button onClick={handlerBuy}>click</button>
//     </div>
//   )
// }

import React from 'react'
type CommentCardType = {
    title : string,
    price : number,
    brand : string 
    onBuy : () => void,
    onCardClick  : () => void,
    children : React.ReactNode
}

export default function CommentCard({title,price,brand,onBuy,onCardClick,children} : CommentCardType) {
    const handlerBuy = (e : React.MouseEvent<HTMLButtonElement>) => {
        const targe = e.currentTarget as HTMLElement;
        console.log(targe.innerText);
        e.stopPropagation();
        onBuy();
    }

    const handleLink = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const targe = e.currentTarget as HTMLElement;
        console.log(targe.innerText);
    }
  return (
    <div
        onClickCapture={() => console.log('상품 카드 캡처링')}
        onClick={onCardClick}
    >
        <h1>{brand}</h1>
        <h2>{title}</h2>
        <p>가격 : {price.toLocaleString()}원</p>
        <p>추가정보 : {React.Children.count(children)}개</p>
        {children}
        <a href="https//:naver.com" onClick={handleLink}>상품 상세페이지</a>
        <br />
        <button onClick={handlerBuy}>click</button>
    </div>
  )
}
