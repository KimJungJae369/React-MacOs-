type CommentCardType = {
    title : string,
    price : number,
    backgroundColor : string,
    buttonText : string,
    onMove : () => void,
    onBuy : () => void,
    children : React.ReactNode
}

export default function CommentCard({title, price, backgroundColor, buttonText, onMove, onBuy, children} : CommentCardType) {
    const handlerBuyClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onBuy();
    }

    const handlerLinkClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        console.log('링크 이동 막기');
    } 
    return (
        <div style={{backgroundColor, padding : 20, width: 300,cursor: "pointer",}}>
            <h1>{title}</h1>
            <p>가격 : {price.toLocaleString()}원</p>

            {children}


            <a href="https://google.com" onClick={handlerLinkClick}>
                상품 설명 더보기
            </a>

            <button onClick={handlerBuyClick}>{buttonText}</button>
        </div>
    )
}
