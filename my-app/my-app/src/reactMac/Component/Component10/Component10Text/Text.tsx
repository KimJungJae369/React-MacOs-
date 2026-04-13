import React from "react";
import UserCart from "./UserCart";

const products = [
  { id: 1, name: "무선 키보드", price: 32000, isSale: true },
  { id: 2, name: "게이밍 마우스", price: 28000, isSale: false },
  { id: 3, name: "모니터 받침대", price: 15000, isSale: true },
];

export default function Text() {
  return (
    <div>
      <h2>장바구니</h2>

      {products.map((product) => (
        <UserCart key={product.id} {...product} />
      ))}
    </div>
  );
}


/*
  map() 
  = 배열 안에 있는 객체(값)을 하나씩 가져와서 새로운 배열(값)으로 JSX반환

  key=()
  = '식별자' 같은 역할
  = 각 요소에 있는 객체가 무엇인지 구분하는 값
  = 'key'는 각 요소의 이름으로 같은 이름을 사용할시 리액트는 내부에서 UI가 꼬일 수 있기 때문에 고유한 값을 사용
  = key = 객체(요소)의 민증(식별자)

  <key가 중복되거나 이상하면>
  1. 값이 다른데 같은 컴포넌트로 인식
  2. input 값이 엉뚱한 곳에 유지
  3. 삭제/추가 시 화면이 이상하게 바뀐다
  4. 체크 상태가 섞임
*/
