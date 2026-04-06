import React from 'react'

interface UserProps{
  name : string;
  age : number;
}

export default function UserCart(props : UserProps) {
  const {name, age} = props;
  return (
    <>
      <h1>{name}님은 {age > 19 ? "성인" : "미성년자"}입니다.</h1>
    </>
  )
}
