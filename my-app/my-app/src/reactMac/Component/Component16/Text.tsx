import CommentCard from './CommentCard'

export default function Text() {
  const handleMove = () => {
    console.log('상세 페이지로 이동');
  }

  const handleBuy = () => {
    console.log('상품 구매');
  }
  return (
    <div>
      <CommentCard
        title="맥북 프로"
        price={2890000}
        backgroundColor="lightblue"
        buttonText="구매하기"
        onMove={handleMove}
        onBuy={handleBuy}
    >
        <p>M4 Pro / 24GB / 512GB SSD</p>
    </CommentCard>
    </div>
  )
}


/*
  HTMLAnchorElement
  = <a> 태그(링크)를 가리키는 정식 이름
*/
