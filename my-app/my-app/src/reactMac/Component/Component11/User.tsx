import React from 'react'

type UserType = {
  title : string,
  price : number,
  children : React.ReactNode
}

export default function User({title, price, children} : UserType) {
  return (
    <div>
      <h1>{title}</h1>
      <p>가격 : {price.toLocaleString()}원</p>
      {children}
    </div>
  )
}
