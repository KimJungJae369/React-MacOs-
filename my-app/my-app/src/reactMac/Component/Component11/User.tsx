import React from 'react'

type UserType = {
  title : string,
  price : number,
  brand : string,
  children : React.ReactNode
}

export default function User({title, price, brand, children} : UserType) {
  return (
    <div>
      <h1>{brand}</h1>
      <h2>{title}</h2>
      <p>가격 : {price.toLocaleString()}원</p>
      <br />
      <p>추가 정보 : {React.Children.count(children)}</p>
      {children}
    </div>
  )
}
