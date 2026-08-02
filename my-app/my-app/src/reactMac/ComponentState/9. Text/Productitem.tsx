import React, { useState, Children } from "react";

type ProductitemType = {
  title : string,
  price : number,
  backgroundColor : string,
  buttonText : string,
  children : React.ReactNode
}

export default function Productitem({title, price, backgroundColor, buttonText, children} : ProductitemType) {
  const [like, setLike] = useState(0);
  const handlerLike = () => {
    setLike(prev => prev + 1);
  }

  const [cart, setCart] = useState(0);
  const handlerCart = () => {
    setCart(prev => prev + 1);
    console.log(`${title}`);
  }
  return (
    <div style={{backgroundColor, padding : 20, margin : 20}}>
      <h1>{title}</h1>
      <p>가격  : {price.toLocaleString()}원</p>
      <p>옵션 개수 : {Children.count(children)}개</p>
      {children}

      <p>❤️ 좋아요 : {like}</p>
      <button onClick={handlerLike}>❤️ 좋아요</button>

      <p>🛒 장바구니 : {cart}</p>
      <button onClick={handlerCart}>{buttonText}</button>
    </div>
  )
}
