import { useState } from "react";
import React from 'react'

type ProductitemType = {
  title: string,
  price: number,
  brand: string,
  onBuy: () => void;
  onCardClick: () => void;
  children: React.ReactNode
}

export default function Productitem({
  title,
  price,
  brand,
  onBuy,
  onCardClick,
  children
}: ProductitemType) {

  const [count, setCount] = useState(0);
  const handlerCapt = () => {
    console.log('카드 캡처링');
  }

  const handlerBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLElement
    console.log(target.innerText);
    e.stopPropagation();
    setCount(prev => prev + 1);
    onBuy();
  }

  const handlerAalink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log('상품 상세보기');
    e.stopPropagation();
  }

  return (
    <div
      onClickCapture={handlerCapt}
      onClick={onCardClick}
      style={{ border: '1px solid #fff', padding: 20 }}
    >
      <h1>{brand}</h1>
      <h2>{title}</h2>
      <p>가격 : {price.toLocaleString()}원</p>
      <br />
      <p>
        추가 정보 : {React.Children.count(children)}
      </p>
      {children}
      <a
        href="https://naver.com"
        onClick={handlerAalink}
      >
        상품 상세보기
      </a>
      <br />
      <button onClick={handlerBuy}>
        구매하기
      </button>
      <p>구매 수량 : {count}</p>
    </div>
  )
}