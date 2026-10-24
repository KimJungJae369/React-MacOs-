
// import React from 'react';

// type CommentCardType = {
//   title: string;
//   price: number;
//   brand: string;
//   children?: React.ReactNode;
//   onBuy: () => void;
//   onCardClick: () => void;
// };

// export default function CommentCard({
//   title,
//   price,
//   brand,
//   children,
//   onBuy,
//   onCardClick,
// }: CommentCardType) {
//   // 부모의 캡처링 이벤트
//   const handleCardCapture = () => {
//     console.log('상품 카드 캡처링');
//   };

//   // 부모의 버블링 이벤트
//   const handleCardBubble = (
//     e: React.MouseEvent<HTMLDivElement>
//   ) => {
//     const target = e.currentTarget as HTMLElement;

//     console.log('상품 카드 버블링');
//     console.log('클릭한 요소:', target.innerText);

//     onCardClick();
//   };

//   // 구매 버튼 이벤트
//   const handleBuyClick = (
//     e: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     const target = e.currentTarget as HTMLElement;

//     console.log('클릭한 버튼:', target.innerText);

//     // 부모로 이벤트가 전파되는 것을 방지
//     e.stopPropagation();

//     onBuy();
//   };

//   // 상품 상세 링크 이벤트
//   const handleLinkClick = (
//     e: React.MouseEvent<HTMLAnchorElement>
//   ) => {
//     // 링크의 기본 페이지 이동을 방지
//     e.preventDefault();

//     // 부모의 버블링 이벤트를 방지
//     e.stopPropagation();

//     const target = e.currentTarget as HTMLAnchorElement;

//     console.log('상품 상세 링크 클릭');
//     console.log('클릭한 링크:', target.innerText);
//   };

//   return (
//     <div
//       onClickCapture={handleCardCapture}
//       onClick={handleCardBubble}
//     >
//       <h1>{title}</h1>
//       <p>브랜드: {brand}</p>
//       <h2>가격: {price.toLocaleString()}원</h2>

//       <div>
//         <p>추가 정보: {React.Children.count(children)}개</p>
//         {children}
//       </div>

//       <a
//         href="https://example.com/product"
//         onClick={handleLinkClick}
//       >
//         상품 상세 보기
//       </a>

//       <button
//         type="button"
//         onClick={handleBuyClick}
//       >
//         구매하기
//       </button>
//     </div>
//   );
// }



import React from 'react'

type CommentCardType = {
  title : string,
  price : number,
  brand : string,
  children : React.ReactNode
  onBuy : () => void,
  onCardClick : () => void;
}

export default function CommentCard({title,price,brand,children,onBuy,onCardClick} : CommentCardType) {
  const handleCardCapture = () => {
    console.log('부모 캡처링');
  }

  const handleCardBubble = (e : React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    console.log(target.innerText);
    console.log('상품 카드 버블링');
    onCardClick();
  }

  const handleBuyClick = (e : React.MouseEvent<HTMLButtonElement>) => {
    const targets = e.currentTarget as HTMLElement;
    console.log('클릭한 버튼:', targets.innerText);
    e.stopPropagation();
    onBuy();
  }

  const handleLinkClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const targetA = e.currentTarget as HTMLAnchorElement
    console.log('상품 상세 링크 클릭');
  console.log('클릭한 링크:', targetA.innerText);
  }
  return (
    <div
      onClickCapture={handleCardCapture}
      onClick={handleCardBubble}
    >
      <h1>{title}</h1>
      <p>브랜드: {brand}</p>
      <h2>가격: {price.toLocaleString()}원</h2>
      <p>추가 정보: {React.Children.count(children)}개</p>
      {children}
      <a href="https//:naver.com" onClick={handleLinkClick}>상품 상세보기</a>
      <button onClick={handleBuyClick}>자세히 보기</button>
    </div>
  )
}
