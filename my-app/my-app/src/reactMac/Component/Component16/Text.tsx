import CommentCard from './CommentCard'

export default function Text() {
  const handleMove = () => {
    console.log('상품 상세페이지로 이동');
  }

  const handleBuy = () => {
    console.log('구매 완료');
  }
  return (
    <div>
      <CommentCard
        title="맥북 프로"
        price={2790000}
        onMove={handleMove}
        onBuy={handleBuy}
      >
        <p>M4 Pro</p>
        <p>24GB RAM</p>
    </CommentCard>
    </div>
  )
}



/*
  HTMLAnchorElement
  = <a> 태그(링크)를 가리키는 정식 이름
*/
