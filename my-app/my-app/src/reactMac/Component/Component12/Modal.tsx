type ModalType = {
  title : string,
  price : number,
  backgroundColor : string,
  buttonText : string,
  onBuy : () => void
  children : React.ReactNode
}

export default function Modal({title, price, backgroundColor, buttonText, onBuy, children} : ModalType) {
  return (
    <div style={{backgroundColor, padding : 20}}>
        <h1>{title}</h1>
        <p>가격 : {price.toLocaleString()}원</p>
        {children}
        <button onClick={onBuy}>{buttonText}</button>
    </div>
  )
}
