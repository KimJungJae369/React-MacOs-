// 1. 인라인 방식
// export default function Handler() {
//     return (
//         <button onClick={() => {alert('inline handler')}}>click</button>
//     )
// }

// import React from 'react'

// export default function Handler() {
//   return (
//     <button onClick={() => alert('인라인 핸들러')}>Handler</button>
//   )
// }

// import React from 'react'

// export default function Handler() {
//     return (
//         <button onClick={() => alert('인라인 핸들러 방식')}>Handler</button>
//     )
// }





















// 2. 함수 참조 방식
// export default function Handler() {
//     const clickHeandler = () => {
//         alert('Function reference handler')
//     }
//     return (
//         <>
//         <button onClick={clickHeandler}>click</button>
//         </>
//     )
// }

// import React from 'react'

// export default function Handler() {
//     const handlerLcick = () => {
//         alert('Function reference handler')
//     }
//   return (
//     <button onClick={handlerLcick}>Handler</button>
//   )
// }


























// 3. 이벤트 핸들러 매개변수
// export default function Handler() {
//     const clickHandler = (msg : string) => {
//         alert(msg);
//     } 
//     return (
//         <>
//             <button onClick={() => {clickHandler('argument')}}>click</button>
//         </>
//     )
// }

import React from 'react'

export default function Handler() {
    const handlerClick = (title : string) => {
        alert(title)
    }
  return (
    <button onClick={() => handlerClick('argument')}>Handler</button>
  )
}








/*
    이벤트 핸들러
    = '이벤트 핸들러'는 이벤트가 발생했을 때 실행하는 함수
    = 리액트에서는 'JSX 요소'에 이벤트 속성을 사용해 이벤트를 등록
    = 이때 이벤트 속성에 이벤트 핸들러를 할당해야 한다

    1. 인라인 핸들러(inline handler)
    = 이벤트 속성 안에 함수를 직접 작성하는 방식
    = 주로 간단한 동작을 처리할 때 사용
    = '인라인 핸들러' 방식은 이벤트 핸들러를 간단하게 할당할 수 있고 코드가 간결해서 유용하다
        ex)
            <button onClick={() => {alert('Button clicked')}}>click</button>
            - 코드에서 'onClick' 이벤트 속성안에 '화살표 함수'를 직접 작성


    2. 함수 참조
    = '이벤트 핸들러'를 컴포넌트 바깥(JSX 요소 밖)에서 따로 정의하고 해당 함수를 참조해 이벤트 속성에 할당하는 방식
    = 주로 복잡한 동작을 처리할 때 사용
        ex)
            export default function Handler() {
                const clickHeandler = () => {
                    alert('Button clicked')
                }
                return (
                    <>
                        <button onClick={clickHeandler}>click</button>
                    </>
                )
            }
            - '함수 참조' 방식을 사용할 때 JSX 함수명 뒤에 괄호를 붙이면 안된다
            - 괄호를 붙이면 함수가 즉시 실행되므로 버튼을 클릭하지 않아도 컴포넌트가 화면에 나타나는 순간 함수가 실행된다
            - 따라서 함수 참조 방식에서는 함수명 뒤에 괄호를 붙이지 않고 함수 자체를 참조해야 한다
                ex) 잘못된 방식 : <button onClick={'clickHeandler()' << 잘못된 부분}>click</button>


    3. 이벤트 핸들러의 매개변수 : 함수 참조 + 인라인 핸들러
    = 리액트에서는 이벤트 핸들러에 매개변수를 전달할 때 인라인 핸들러 방식을 사용
    = '함수 참조'방식으로는 매개변수를 전달할 수 없다
        ex)
            export default function Handler() {
                const clickHandler = (msg : string => '.tsx'이라서 타입을 정의) => {
                    alert(msg);
                } 
                return (
                    <>
                        <button onClick={() => {clickHandler('hello')}}>click</button>
                    </>
                )
                - '함수 참조'로 매개변수 전달하면 함수가 즉시 실행되는 문제가 발생한다
                    ex) 잘못된 방식 : <button onClick={clickHandler('hello') << 잘못된 부분}>click</button>
                    - 이벤트 핸들러에 매개변수를 전달할 때 인라인 핸들러 방식을 사용해야 한다

*/
