type ModalType = {
  title : string,
  price : number,
  onBuy : () => void;
  children : React.ReactNode
}

export default function Modal({title, price, onBuy, children} : ModalType) {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    onBuy();
  }
  return (
    <div>
      <h1>{title}</h1>
      <p>가격 : {price.toLocaleString()}원</p>
      {children}
      <button onClick={handleClick}>click</button>
    </div>
  )
}
