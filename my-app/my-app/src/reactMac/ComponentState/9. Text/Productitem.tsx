import { useState } from "react";

type ProductitemType = {
  title : string,
  price : number,
  onBuy : () => void,
  children : React.ReactNode,
}

export default function Productitem({title, price, onBuy, children} : ProductitemType) {
  const [count, setCount] = useState(0);
  const handlerLike = () => {
    setCount(prev => prev + 1);
  }

  const clickBuy = (e : React.MouseEvent) => {
    console.log('구매 버튼 클릭');
    e.stopPropagation();
    onBuy();
  }

  const handleCapture = () => {
    console.log('DIV 캡처링');
  }

  const handleBubble = () => {
    console.log('DIV 버블링');
  }

  const habndlerLink = (e : React.MouseEvent<HTMLAnchorElement>) => {
    const trageLink = e.currentTarget as HTMLAnchorElement;
    console.log(trageLink.href);
    e.preventDefault();
  }
  return (
    <div onClickCapture={handleCapture} onClick={handleBubble} style={{border : '1px solid #fff', padding : 20,}}>
      <h1>{title}</h1>
      <p>가격 : {price.toLocaleString()}원</p>

      <br />

      {children}
      <br />

      <button onClick={clickBuy}>구매하기</button>
      <br />
      <button onClick={handlerLike}>좋아요 : {count}</button>
      <br />
      <br />
      <a href="https://www.naver.com" onClick={habndlerLink}>Link</a>
    </div>
  )
}
