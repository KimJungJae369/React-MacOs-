import React, { useState } from "react";

type ProductItemProps = {
  title: string;
  price: number;
  backgroundColor: string;
  buttonText: string;
  onMove: () => void;
  onBuy: () => void;
  children: React.ReactNode;
};

export default function ProductItem({
  title,
  price,
  backgroundColor,
  buttonText,
  onMove,
  onBuy,
  children,
}: ProductItemProps) {
  const [count, setCount] = useState(0);

  // 좋아요 버튼
  const handleLikeClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation(); // 부모 클릭 막기
    setCount((prev) => prev + 1);
  };

  // 구매 버튼
  const handleBuyClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation(); // 부모 클릭 막기
    onBuy();
  };

  // 링크
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault(); // 기본 이동 막기
    e.stopPropagation(); // 카드 클릭도 막기
    console.log("링크 이동 막기");
  };

  return (
    <div
      onClick={onMove}
      style={{
        backgroundColor,
        padding: 20,
        textAlign: "center",
        cursor: "pointer",
        borderRadius: 10,
      }}
    >
      <h2>{title}</h2>

      <p>가격 : {price.toLocaleString()}원</p>

      {children}

      <br />

      <p>❤️ {count}</p>

      <button onClick={handleLikeClick}>
        ❤️ 좋아요
      </button>

      <br />
      <br />

      <button onClick={handleBuyClick}>
        {buttonText}
      </button>

      <br />
      <br />

      <a
        href="https://google.com"
        onClick={handleLinkClick}
      >
        상품 설명 더보기
      </a>

      {count >= 10 && (
        <>
          <br />
          <br />
          <h3>🔥 인기 상품</h3>
        </>
      )}
    </div>
  );
}
