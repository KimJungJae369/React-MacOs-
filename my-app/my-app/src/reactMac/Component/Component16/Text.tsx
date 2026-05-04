/*
  FormEvent<HTMLFormElement> : 폼 요소에서 발생하는 이벤트를 나타내는 타입입니다.
  HTMLFormElement : HTML의 <form> 요소를 나타내는 타입입니다. 
  폼 요소에서 발생하는 이벤트 객체의 타입을 지정할 때 사용됩니다.

  HTMLAnchorElement : HTML의 <a> 요소를 나타내는 타입입니다.
  앵커 요소에서 발생하는 이벤트 객체의 타입을 지정할 때 사용됩니다.
*/

import React from 'react'

export default function Text() {
  const handleAppClick = () => {
    console.log('App (버블링)')
  }

  const handleCardClick = () => {
    console.log('Card (버블링)')
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('Button 클릭')

    // ❗ 이벤트 전파 막기
    e.stopPropagation()

    // ❗ 기본 동작 막기 (페이지 이동 방지)
    e.preventDefault()
  }

  // 캡처링 단계
  const handleAppCapture = () => {
    console.log('App (캡처링)')
  }

  const handleCardCapture = () => {
    console.log('Card (캡처링)')
  }

  return (
    <div
      onClick={handleAppClick}
      onClickCapture={handleAppCapture}
      style={{ padding: '20px', border: '2px solid red' }}
    >
      App
      <div
        onClick={handleCardClick}
        onClickCapture={handleCardCapture}
        style={{ padding: '20px', border: '2px solid blue' }}
      >
        Card
        <a
          href="https://example.com"
          onClick={handleButtonClick}
          style={{ display: 'block', marginTop: '10px' }}
        >
          버튼 (a 태그)
        </a>
      </div>
    </div>
  )
}