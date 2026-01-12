import React from 'react'

const Jsx = () => {
    return (
        <>
            {/* 
                JSX란
                = 자바스크립트 코드안에서 HTML과 비슷한 문법을 사용해 UI를 정의할 수 있도록 도와주는 '문법확장'
                = 쉽게 말해 자바스크립트 안에서 HTML 처럼 생긴 코드를 쓸 수 있게 해주는 문법
                = HTML처럼 보이지만 실제로는 HTML이 아니며 웹 브라우저가 직접 이해할 수 있는 문법도 아니다


                ex) 자바스크립트 : 'createElement' 메서드를 사용해 UI를 정의
                -html-
                <div>
                    <h1>Hello, React</h1>
                </div>
                
                -js-
                React.createElement('div', null, React.createElement('h1', null, 'Hello, React'))


                ex) 리액트 : JSX 문법을 사용해 UI를 정의
                -JSX 문법-
                <div>
                    <h1>Hello, React</h1> 
                </div>

                - <div>와 <h1> 태그는 JSX이고 함수 정의나 return 구문은 자바스크립트 -
                export default function App() {
                    return(
                        <div>
                            <h1>Hello, React</h1> = JSX 문법
                        </div>
                    )
                }
            */}
        </>
    )
}

export default Jsx
