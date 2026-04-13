import React from 'react'
import UserCard from './UserCard'

export default function Text() {
  const products = [
    { id: 1, name: "무선 키보드" },
    { id: 2, name: "게이밍 마우스" },
  ];

  const clickCard = (name : string) => {
    alert(`상품 상세보기 ${name}`);
  }

  const clickDeleteCard = (name : string) => {
    alert(`상품 삭제하기 ${name}`);
  }
  return (
    <>
      {products.map(product => (
        <UserCard 
          key={product.id}
          id={product.id}
          name={product.name}
          cxzc={() => clickCard(product.name)}
          zxc={() => clickDeleteCard(product.name)}
        />
      ))}
    </>
  )
}
