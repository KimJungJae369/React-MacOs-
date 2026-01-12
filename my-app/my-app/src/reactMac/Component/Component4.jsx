// 1. 함수 선언문 
// export default function Component4(){
//     return(
//         <>
//             <h1>Hello, Funcrion Component</h1>
//         </>
//     )
// }

// export default function Component4(){
//     return(
//         <>
//             <h1>함수 선언문</h1>
//         </>
//     )
// }


// 2. 함수 표현식
// const Component4 = function(){
//     return(
//         <>
//             <h1>Hello, Funcrion Component</h1>
//         </>
//     )
// }

// const Compontent4 = function(){
//     return(
//         <h1>함수 표현식</h1>
//     )
// }
// export default Compontent4;

// 3. 화살표 함수
// const Component4 = () => {
//     return(
//         <>
//             <h1>Hello, Funcrion Component</h1>
//         </>
//     )
// }
// export default Component4;

import React from 'react'

const Component4 = () => {
  return (
    <div>Component4</div>
  )
}

export default Component4


/*
    컴포넌트 기초
    = 리액트의 핵심은 '컴포넌트'이다

    <컴포넌트 확장자>
    = 리액트에서는 컴포넌트를 작성할 때 '.js, .jsx, .ts, .tsx'같은 파일 확장자를 사용할 수 있다
    = 하지만 확장자에 따라 'JXS'문법을 사용할 수 있는지 여부가 달라진다

    .js = CRA : JSX지원 / Vite : JSX지원
    .jsx = CRA : JSX지원 / Vite : JSX지원
    .ts = CRA : JSX지원 안함 / Vite : JSX지원 안함
    .tsx = CRA : JSX지원 / Vite : JSX지원
    = 자바스크립트 기반 리액트 애플리케이션에선에서는 '.jsx' 사용
    = 타입스크립트 기반의 리액트 애플리케이션에서는 JSX 문법을 함께 사용할 수 있는 '.tsx'확장자를 사용

    // 1. 함수 선언문 
    export default function 컴포넌트_이름(){
        return(
            <>
                <h1>Hello, Funcrion Component</h1>
            </>
        )
    }
    = 컴포넌트 'function' 키워드로 정의하고 JSX를 return문 안에 작성
    = 그리고 이 컴포넌트를 다른 파일에서 사용할 수 있도록 '내보내기(export)'한다
    = 컴포넌트를 내보낼 때 두 가지 방법 중 하나를 선택할 수 있다 

        1. import {컴포넌트_이름} from './컴포넌트_이름.tsx' = export function app(){...}
        = '내보내기(export)' 키워드만 사용하면 컴포넌트를 불러오는 쪽에서 중괄호({})를 사용해 불러와야 한다
        = 'export'를 사용하면 하나의 파일에서 여러 컴포넌트를 내보낼 수 있다

        2. import 컴포넌트_이름 from './컴포넌트_이름.tsx' = export default function app(){...}
        = 반면에 'export default' 키워드를 사용하면 중괄호 없이 바로 불러올수 있다 
        = 'export default'는 한 파일에서 하나의 기본 컴포넌트만 내보낼 수 있다

    = 컴포넌트를 정의하고 내보는 방식은 프로젝트 구조나 협업 스타일에 따라 달라질 수 있다
        
    <다른 정의 방식>
    = '함수 표현식'이나 '화살표 함수'를 사용해 정의할 수 있다

    // 2. 함수 표현식
    const 컴포넌트_이름 = function(){
        return(
            <>
                <h1>Hello, Funcrion Component</h1>
            </>
        )
    }
    export default 컴포넌트_이름;



    // 3. 화살표 함수
    = 단축 문법 : rface
    const 컴포넌트_이름 = () => {
        return(
            <>
                <h1>Hello, Funcrion Component</h1>
            </>
        )
    }
    export default 컴포넌트_이름;

    = 세 가지 방식은 모두 동일하게 동작한다
    = 어떤 방식으로 컴포넌트를 작성하더라도 리액트는 정상적으로 컴포넌트로 인식하고 랜더링 한다
    = '함수 선언문' 방식을 가장 많이 사용한다 코드의 가독성이 좋고, 함수 이름이 명확하게 보이기 때문이다
*/