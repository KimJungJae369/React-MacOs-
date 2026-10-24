// import React from 'react'

// type UserType = {
//   title : string,
//   price : number,
//   brand : string,
//   children : React.ReactNode
// }

// export default function User({title,price,brand,children} : UserType) {
//   return (
//     <div>
//         <h1>{title}</h1>
//         <p>브랜드 : {brand}</p>
//         <h2>가격 : {price.toLocaleString()}원</h2>

//         <p>추가 정보 : {React.Children.count(children)}</p>
//         {children}
//     </div>
//   )
// }


import React from 'react'

type UserType = {
  title : string,
  price : number,
  brand : string,
  children : React.ReactNode
}

export default function User({title,price,brand,children} : UserType) {
  return (
    <div>
      <h1>{title}</h1>
      <p>브랜드 : {brand}</p>
      <p>가격 : ${price.toLocaleString()}원</p>
      <p>추가 정보 : {React.Children.count(children)}</p>
      {children}
    </div>
  )
}
