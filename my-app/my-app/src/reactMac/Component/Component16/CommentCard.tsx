type commentcartType = {
    children : React.ReactNode,
    title : string,
    backgroundColor : string,
    buttonText : string,
    productName : string,
    onBuy : (name : string) => void,
    onCardClick : () => void,
    onCardCapturn : () => void
}

export default function CommentCard({
    children,
    title,
    backgroundColor,
    buttonText,
    productName,
    onBuy,
    onCardClick,
    onCardCapturn
} : commentcartType) {
    const handlerButtonClick = (e : React.MouseEvent<HTMLButtonElement>) =>{
        e.stopPropagation();
        console.log(e.currentTarget.tagName);
        onBuy(productName);
    }

    const handlerLinkClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('상세 페이지는 준비 중입니다');
    }
  return (
    <div
        style={{
            backgroundColor,
            padding : "20px",
            marginBottom : "20px"
        }}
        onClick={onCardClick}
        onClickCapture={onCardCapturn}
    >
        <h2>{title}</h2>
        {children}
        <button onClick={handlerButtonClick}>{buttonText}</button>

        <br /><br />
        <a href="https://naver.com" onClick={handlerLinkClick}>자세히 보기</a>
    </div>
  )
}
