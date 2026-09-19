import React from 'react'

type MadalType = {
  title : string,
  price : number,
  brand : string,
  onBuy : () => void,
  children : React.ReactNode
}

export default function Modal({title, price, brand, onBuy, children} : MadalType) {
  const handlerClick = (e : React.MouseEvent<HTMLButtonElement>) => {
    const tareat = e.currentTarget as HTMLElement
    console.log(tareat.innerText);
    onBuy();
  }
  return (
    <div>
      <h1>{brand}</h1>
      <h2>{title}</h2>
      <p>가격 : {price.toLocaleString()}원</p>
      <p>추가 정보 : {React.Children.count(children)}</p>
      {children}
      <button onClick={handlerClick}>구매하기</button>
    </div>
  )
}
