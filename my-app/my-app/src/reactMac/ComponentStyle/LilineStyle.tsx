// import React from 'react'

// export default function LilineStyle() {
//     const style = {
//         backgroundColor : 'blue',
//         color : 'white',
//         fontSize : '16px',
//         padding : 10,
//     }
//   return (
//     <>
//         <h1 style={style}>Inline Style</h1>
//     </>
//   )
// }





import React from 'react'

export default function LilineStyle() {
  return (
    <>
        <h1
            style={{
                backgroundColor : 'blue',
                color : 'white',
                fontSize : '16px',
                padding : 10,
            }}
        >Inline Style</h1>
    </>
  )
}


/*
    전통적인 방법으로 스타일링하기
    = 리액트에서는 스타일을 적용하는 방식이 매우 다양하다
    = 전톡적인 CSS 파일을 활용하는 방식
    = 자바스크립트 코드 안에서 스타일리을 정의 하는 'CSS-in-JS'방식
    = 최근 많이 사용하는 'Tailwind CSS'같은 유틸리티 기반 프레임워크까지 폭넓게 선택지 존재한다

    1. 인라인 스타일
    = 리액트 컴포넌트에 스타일을 적용하는 가장 전통적인 방법은 '인라인 스타일'이다
    = 'JSX' 요소의 style 속성에 직접 스타일 객체를 지정하는 방식
    = HTM에서는 style 속성에 문자열로 CSS 속성을 작성
        ex) HTML
            <h1 style='coloe : red; font-size : 20px>h1</h1>
    
    = 반면 'JSX'에서는 스타일을 객체 형태로 작성
        ex) JSX
            <h1 style={{coloe : red; font-size : 20px}}>h1</h1>

        1. import React from 'react'

            export default function LilineStyle() {
                const style = {
                    backgroundColor : 'blue',
                    color : 'white',
                    fontSize : '16px',
                    padding : 10,
                }
            return (
                <>
                    <h1 style={style}>Inline Style</h1>
                </>
            )
        }
        - 스타일 객체를 변수로 분리해서 사용하는 방식
        - 이처럼 객체를 변수로 따로 정의하면 코드가 더 깔끔하고 동일한 스타일을 여러 곳에서 재사용할 수 있다는 장점


        2. import React from 'react'

        export default function LilineStyle() {
            return (
                <>
                    <h1
                        style={{
                            backgroundColor : 'blue',
                            color : 'white',
                            fontSize : '16px',
                            padding : 10,
                        }}
                    >Inline Style</h1>
                </>
            )
        }
        - 'JSX'안에서 style 속성에 직접 객체를 작성하는 방식
        - 간단한 스타일만 적용할 때는 JSX 내부에서 바로 작성하는 방식이 더 직관적일 수 있다
*/
