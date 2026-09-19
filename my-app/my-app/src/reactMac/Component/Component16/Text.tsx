import CommentCard from './CommentCard'

export default function Text() {

  const handleBuy = () => {
    console.log('구매 완료')
  }

  const handleCardClick = () => {
    console.log('상품 카드 클릭')
  }
  return (
    <div>
      <CommentCard
        title="MacBook Pro 14"
        price={2790000}
        brand="Apple"
        onBuy={handleBuy}
        onCardClick={handleCardClick}
      >
        <p>M4 Pro</p>
        <p>24GB RAM</p>
        <p>512GB SSD</p>
      </CommentCard>
    </div>
  )
}




/*
  HTMLAnchorElement
  = <a> 태그(링크)를 가리키는 정식 이름
*/
