import React from 'react'

type ModalType = {
    title: string
    price: number
    brand: string
    onBuy: () => void
    onCardClick: () => void
    children: React.ReactNode
}

export default function CommentCard({
    title,
    price,
    brand,
    onBuy,
    onCardClick,
    children
}: ModalType) {

    // 구매 버튼 이벤트
    const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget as HTMLElement

        console.log(target.innerText)

        // 부모의 클릭 이벤트로 전달되는 것을 막음
        e.stopPropagation()

        onBuy()
    }

    // 상품 상세보기 링크 이벤트
    const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        e.stopPropagation()

        const target = e.currentTarget as HTMLElement

        console.log(target.innerText)
    }

    return (
        <div
            onClickCapture={() => console.log('상품 카드 캡처링')}
            onClick={onCardClick}
        >
            <h1>{brand}</h1>

            <h2>{title}</h2>

            <p>
                가격 : {price.toLocaleString()}원
            </p>

            <p>
                추가 정보 : {React.Children.count(children)}
            </p>

            {children}

            <a
                href="https://example.com"
                onClick={handleLink}
            >
                상품 상세보기
            </a>

            <br />

            <button onClick={handleBuy}>
                구매하기
            </button>
        </div>
    )
}