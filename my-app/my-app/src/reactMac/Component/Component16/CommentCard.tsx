import React from 'react'

type CommentCardType = {
    title : string,
    price : number,
    onMove : () => void;
    onBuy : () => void;
    children : React.ReactNode
}

export default function CommentCard({title,price,onMove,onBuy, children} : CommentCardType) {
    const handleBuyClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onBuy();
    }
    const handleLinkClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const link = e.currentTarget as HTMLAnchorElement;
        console.log(link.href);
    }
  return (
    <div style={{backgroundColor : 'lightblue', padding : 20, margin : 20}} onClickCapture={() => {console.log('부모 캡처링')}} onClick={onMove}>
        <h1>{title}</h1>
        <p>가격 : {price.toLocaleString()}원</p>
        <p>옵션 개수 : {React.Children.count(children)}개</p>
        {children}
        <button onClick={handleBuyClick}>구매하기</button>
        <br /><br />
        <a href='https://naver.com' onClick={handleLinkClick}>상품 상세보기</a>
    </div>
  )
}