import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  isSale: boolean;
};

export default function UserCart(props: Product) {
  const { name, price, isSale } = props;

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <p>상품명: {name}</p>
      <p>가격: {price}원</p>
      {isSale && <p>🔥 세일 중</p>}
    </div>
  );
}
