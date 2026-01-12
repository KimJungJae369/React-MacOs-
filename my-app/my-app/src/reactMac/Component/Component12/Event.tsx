// import React from 'react'
// import Button from './Button'

// export default function Event() {
//     return (
//         <>
//             <Button onFive = {() => {alert('five')}}></Button>
//         </>
//     )
// }


import React from 'react'
import Button from './Button'

export default function Event() {
    return (
        <>
            <Button ondkasl={() => alert('안녕하세요')}></Button>
        </>
    )
}




/*
    컴포넌트와 이벤트
    = 자바스크립트에서 '이벤트'는 사용자와의 상호작용에 따라 발생하는 '일련의 사건'을 의미한다
    = 예를 들어 마우스 버튼을 클릭하거나 키보드로 글자를 입력하는 등의 동작들은 모두 '이벤트'로 간주
    = 리액트에서도 이러한 이벤트를 활용해 사용자와 상호작용하는 기능을 구현할 수 있다

        이벤트 사용 기본 문법 : <JSXElement 이벤트_속성 = '이벤트_핸들러' />

    <이벤트 속성>
    = 'HTML'에서 '이벤트 속성'은 사용자가 특정 동작을 수행했을 때(마우스 클릭, 키 입력 등)실행 할 자바스크립트 코드를 지정하는 속성
    = 리액트에서도 이벤트를 비슷한 방식으로 사용
    = 다만 몇 가지 중요한 차이점이 있다

    차이점
    -HTML-
    = HTML에서는 이벤트 속성을 소문자로 작성하고 값은 문자열 형태의 자바스크립트 코드로 작성

    -React-
    = 이벤트 속성을 '카멜 케이스(onClick, onChange 등)'로 작성하고 값을 함수로 전달

    <주요 이벤트 속성>
    -마우스 이벤트-
    onClick : 요소가 클릭될 때 발생
    onDoubleClick : 요소가 더블 클릭될 때 발생      
    onMouseEnter : 마우스 커서가 요소에 진입할 때 발생
    onMouseLeave : 마우스 커서가 요소에서 벗어날 때 발생

    -키보드 이벤트-
    onKeyDown : 키가 눌렸을 때 발생
    onKeyUp : 키가 떼어졌을 때 발생
    onKeyPress : 키가 눌리고 있을 때 발생

    -폼 이벤트-
    onChange : 입력 필드의 값이 변경될 때 발생
    onSubmit : 폼이 제출될 때 발생
    onFocus : 요소가 포커스를 받을 때 발생
    onBlur : 요소가 포커스를 잃을 때 발생

    -터치 이벤트-
    onTouchStart : 터치가 시작될 때 발생
    onTouchMove : 터치가 이동할 때 발생
    onTouchEnd : 터치가 종료될 때 발생

    -기타 이벤트-
    onLoad : 요소가 로드될 때 발생
    onError : 요소에서 오류가 발생할 때 발생
    onScroll : 요소가 스크롤될 때 발생

    <이벤트 속성 사용 시 주의사항>
    = JSX에서 HTML 태그에는 DOM 표준 이벤트 속성만 사용할 수 있다
    = 존재하지 않는 속성을 사용하면 웹 브라우저에서 인식할 수 없어 오류가 발생하거나 무시한다
        ex)
            <button 'onFive : 존재하지 않는 이벤트' = {handleClick}>Click me</button> // 오류 발생

    = 하지만 컴포넌트는 HTML 태그와 달리 직접 만든 사용자 정의 함수이다
    = 따라서 다음과 같이 원하는 이름의 이벤트 속성을 자유롭게 정의해 'props'로 전달할 수 있다
        ex)
            {Event.tsx (부모 컴포넌트)}
                <Button onFive = {() => {alert('five')}}></Button>
                - 컴포넌트에서는 전달한 'props' 값을 받아 실제 DOM 요소에 연결할 수 있다
                - 예를 들어 Button 컴포넌트를 'onFive'를 props로 받아 onClick 이벤트와 연결해 사용할 수 있다
            

            {Button.tsx (자식 컴포넌트)}
                export default function Button({onFive} : {onFive : () => void}) {
                    return (
                        <button onClick={onFive}>click</button>
                    )
                }
                - 컴포넌트는 사용자 정의 속성을 props로 받아 DOM 요소의 표준 이벤트 속성(onClick 등)에 연결하는 구조로 이벤트를 유연하게 관리할 수 있다

*/
