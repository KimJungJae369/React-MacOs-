import React from 'react';

type UserType = {
  title : string,
  price : number,
  backgroundColor : string,
  children : React.ReactNode
}

export default function User({title,price,backgroundColor,children} : UserType) {
  return (
    <div style={{backgroundColor, padding : 20}}>
      <h1>{title}</h1>
      <p>가격 : {price.toLocaleString()}원</p>
      <p>옵션 개수 : {React.Children.count(children)}개</p>
      {children}
    </div>
  )
}
