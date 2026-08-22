import CommentCard from './CommentCard'

export default function Text() {
  const onBuy = () => {
    console.log('구매 완료');
  }
  return (
    <div>
      <CommentCard
        title = '맥북 프로'
        price = {2790000}
        onBuy = {onBuy}
      >
        <p>* M4 Pro</p>
        <p>* 24GB RAM</p>
        <p>* 512GB SSD</p>
      </CommentCard>
    </div>
  )
}




/*
  HTMLAnchorElement
  = <a> 태그(링크)를 가리키는 정식 이름
*/
