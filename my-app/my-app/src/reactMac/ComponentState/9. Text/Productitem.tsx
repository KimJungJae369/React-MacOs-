
// import React, { useState } from 'react';

// type ProductitemType = {
//   title: string;
//   brand: string;
//   price: number;
//   onBuy: () => void;
//   children: React.ReactNode;
// };

// export default function Productitem({
//   title,
//   brand,
//   price,
//   onBuy,
//   children,
// }: ProductitemType) {
//   // 좋아요 상태
//   const [likeCount, setLikeCount] = useState(0);

//   // 장바구니 상태
//   const [cartCount, setCartCount] = useState(0);

//   // 상품 카드 클릭
//   const handleCardClick = (
//     e: React.MouseEvent<HTMLDivElement>
//   ) => {
//     const target = e.currentTarget as HTMLElement;

//     console.log('상품 카드 버블링');
//     console.log('클릭한 요소:', target.innerText);
//   };

//   // 상품 카드 캡처링
//   const handleCardCapture = () => {
//     console.log('상품 카드 캡처링');
//   };

//   // 좋아요 버튼
//   const handleLikeClick = (
//     e: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     e.stopPropagation();

//     const target = e.currentTarget as HTMLElement;
//     console.log('클릭한 버튼:', target.innerText);

//     setLikeCount((prev) => prev + 1);
//   };

//   // 장바구니 버튼
//   const handleCartClick = (
//     e: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     e.stopPropagation();

//     const target = e.currentTarget as HTMLElement;
//     console.log('클릭한 버튼:', target.innerText);

//     setCartCount((prev) => prev + 1);
//   };

//   // 구매 버튼
//   const handleBuyClick = (
//     e: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     e.stopPropagation();

//     const target = e.currentTarget as HTMLElement;
//     console.log('클릭한 버튼:', target.innerText);

//     onBuy();
//   };

//   return (
//     <div
//       onClick={handleCardClick}
//       onClickCapture={handleCardCapture}
//     >
//       <h1>{title}</h1>

//       <p>브랜드: {brand}</p>

//       <h2>가격: {price.toLocaleString()}원</h2>

//       <p>
//         추가 정보: {React.Children.count(children)}개
//       </p>

//       <div>{children}</div>

//       <button type="button" onClick={handleLikeClick}>
//         좋아요: {likeCount}
//       </button>

//       <button type="button" onClick={handleCartClick}>
//         장바구니: {cartCount}개
//       </button>

//       <button type="button" onClick={handleBuyClick}>
//         구매하기
//       </button>
//     </div>
//   );
// }



import React, { useState } from 'react'

type ProductitemType = {
  title : string,
  brand : string,
  price : number,
  onBuy : () => void,
  children : React.ReactNode
}

export default function Productitem({title,brand,price,onBuy,children} : ProductitemType) {
  const [likeCount, setLikeCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleCardClick = (e : React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement
    console.log('상품 카드 버블링');
    console.log('클릭한 요소:', target.innerText);
  }

  const handleCardCapture = () => {
    console.log('상품 카드 캡처링');
  }

  const handleCartClick = (e : React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const target = e.currentTarget as HTMLElement
    console.log(target.innerText);
    setCartCount(prev => prev + 1);
  }

  const handleBuyClick = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const target = e.currentTarget as HTMLElement
    console.log(target.innerText);
    setLikeCount(prev => prev + 1);
    onBuy();
  }
  return (
    <div
      onClick={handleCardClick}
    onClickCapture={handleCardCapture}
    >
        <h1>{title}</h1>
        <p>브랜드: {brand}</p>
        <h2>가격: {price.toLocaleString()}원</h2>
        <p>추가 정보: {React.Children.count(children)}개</p>
        <div>{children}</div>
        <button onClick={handleBuyClick}>좋아요: {likeCount}</button>
        <button onClick={handleCartClick}>장바구니:{cartCount}</button>
        <button onClick={handleBuyClick}>구매하기</button>
    </div>
  )
}
