import React from 'react'

type CommentCardType = {
    title : string,
    price : number,
    onBuy : () => void
    children : React.ReactNode
}

export default function CommentCard({title, price, onBuy, children} : CommentCardType) {
    const handleCapture = () => {
        console.log('DIV 캡처링');
    }

    const handleBubble = () => {
        console.log('버블링 캡처링');
    }

    const handleBuy = (e : React.MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        e.stopPropagation();
        onBuy();
    }
    
    const handleLink = (e : React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget as HTMLAnchorElement
        e.preventDefault();
        console.log(target.href);
    } 
  return (
    <div onClickCapture={handleCapture} onClick={handleBubble}>
        <h1>{title}</h1>

        <p>가격 : {price.toLocaleString()}원</p>

        {children}

        <a href="https://www.naver.com" onClick={handleLink}>
            네이버 이동
        </a>

        <br />
        
        <button onClick={handleBuy}>구매하기</button>
    </div>
  )
}


