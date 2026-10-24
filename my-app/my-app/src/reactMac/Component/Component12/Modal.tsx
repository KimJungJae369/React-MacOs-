// import React from 'react'

// type ModalType = {
//   title : string,
//   price : number,
//   brand : string,
//   onBuy : () => void
//   children : React.ReactNode
// }

// export default function Modal({title,price,brand,onBuy,children} : ModalType) {
//   const Buy = (e : React.MouseEvent<HTMLButtonElement>) => {
//     const targat = e.currentTarget as HTMLElement;
//     console.log(targat.innerText);
//     onBuy();
//   }
//   return (
//     <div>
//         <h1>{title}</h1>
//         <p>{brand}</p>
//         <h2>가격 : {price.toLocaleString()}원</h2>
//         <p>추가 정보 : {React.Children.count(children)}</p>
//         {children}
//         <button onClick={Buy}>click</button>
//     </div>
//   )
// }


import React from 'react'

type ModalType = {
  title : string,
  price : number,
  brand : string,
  onBuy : () => void,
  children : React.ReactNode
}

export default function Modal({title,price,brand,onBuy,children} : ModalType) {
  const Buy = (e : React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement;
    console.log(target.innerText);
    onBuy();
  }
  return (
    <div>
        <h1>{title}</h1>
        <p>{brand}</p>
        <h2>가격 : {price.toLocaleString()}원</h2>
        <p>추가 정보 : {React.Children.count(children)}</p>
        {children}
        <button onClick={Buy}>click</button>
    </div>
  )
}
