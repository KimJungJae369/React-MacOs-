import React from 'react'

type ModalType = {
  title : string,
  price : number,
  backgroundColor : string,
  buttonText : string,
  onBuy : () => void
  children : React.ReactNode
}

export default function Modal({title, price, backgroundColor, buttonText, onBuy, children} : ModalType) {
  const handlerClick = () => {
    onBuy();
    const message = document.getElementById('message') as HTMLElement;
    message.innerHTML = '상품이 선택되었습니다!';
  }
  return (
    <div style={{backgroundColor, padding : 20, margin : 20}}>
      <h1>{title}</h1>
      <p>가격 : {price.toLocaleString()}원</p>
      <p>옵션 개수 : {React.Children.count(children)}</p>
      {children}
      <button onClick={handlerClick}>{buttonText}</button>
      <p id="message"></p>
    </div>
  )
}


