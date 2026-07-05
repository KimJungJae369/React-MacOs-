import { useState } from "react";

type ProductCardProps = {
  title: string;
  productName: string;
  backgroundColor: string;
  buttonText: string;
  children: React.ReactNode;
  onBuy: (name: string) => void;
};

export default function Productitem({
  title,
  productName,
  backgroundColor,
  buttonText,
  children,
  onBuy,
}: ProductCardProps) {
  // 좋아요 상태
  const [like, setLike] = useState(0);

  // 구매 여부 상태
  const [isBought, setIsBought] = useState(false);

  // 좋아요 버튼
  const handleLike = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    setLike((prev) => prev + 1);
  };

  // 구매 버튼
  const handleBuyClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    console.log(e.currentTarget.tagName);

    onBuy(productName);

    setIsBought(true);
  };

  // 링크 클릭
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("상세 페이지 준비중");
  };

  // 카드 클릭
  const handleCardClick = () => {
    console.log("카드 선택");
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        backgroundColor,
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid gray",
      }}
    >
      <h2>{title}</h2>

      <h3>{productName}</h3>

      {children}

      <p>좋아요 : {like}</p>

      {like >= 10 && <p>🔥 인기 상품</p>}

      <button onClick={handleLike}>
        ❤ 좋아요({like})
      </button>

      <br />
      <br />

      <button onClick={handleBuyClick}>
        {isBought ? "구매 완료" : buttonText}
      </button>

      <br />
      <br />

      <a
        href="https://google.com"
        onClick={handleLinkClick}
      >
        자세히 보기
      </a>
    </div>
  );
}