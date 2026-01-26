// 1. 이벤트 객체와 인라인 핸들러
// import React from 'react'

// export default function Eventobject() {
//     return (
//         <>
//             <button onClick={(e) => {console.log(e)}}>click</button>
//         </>
//     )
// }

// import React from 'react'

// export default function Eventobject() {
//   return (
//     <button onClick={(e) => console.log(e)}>Eventobject</button>
//   )
// }

















// 2. 이벤트 객체와 함수 참조
// import React from 'react'

// export default function Eventobject() {
//     const clickHander = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         console.log(e);
//     }
//     return (
//         <>
//             <button onClick={clickHander}>click</button>
//         </>
//     )
// }

// import React from 'react'

// export default function Eventobject() {
//     const handelerClick = (e : React.MouseEvent <HTMLButtonElement, MouseEvent>) => {
//         console.log(e)
//     }
//   return (
//     <button onClick={handelerClick}>Eventobject</button>
//   )
// }
































// 3. 이벤트 객체와 매개변수
// import React from 'react'

// export default function Eventobject() {
//     const clickHander = (
//         e : React.MouseEvent<HTMLButtonElement, MouseEvent>,
//         mess : string,
//      - 매개변수 - 
//     ) => {
//         console.log(e);
//         alert(mess);
//     }
//     return (
//         <>
//             <button onClick={(e) => clickHander(e, 'Hello!')}>click</button>
//         </>
//     )
// }


import React from 'react'

export default function Eventobject() {
    const handelerClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>, title : string) => {
        console.log(e);
        alert(title)
    }
  return (
    <button onClick={(e) => handelerClick(e, 'Hello!')}>Eventobject</button>
  )
}






/*
    이벤트 객체(Eventobject)
    = 리액트에서는 이벤트가 발생하면 해당 이벤트 핸들러 함수가 호출되고 '이벤트 객체'가 매개변수로 전달
    = 이때 전달되는 이벤트 객체는 웹 브라우저에서 제공하는 '기본 DOM 이벤트 객체'와는 다르다
    = 리액트는 웹 브라우저의 기본 이벤트를 감싸서 만든 자체 이벤트 객체인 '합성 이벤트'를 사용
    = 이는 웹 브라우저마다 이벤트 객체의 동작 방식이 조금씩 달라 이를 일관 되게 처리하기 위해서 이를 '크로스 브라우저 호환성을 확보한다'라고 표현 
    = 합성 이벤트는 기본DOM 이벤트와 거의 동일한 속성과 메서드를 제공하므로 일반 DOM이벤트 처럼 사용할 수 있다
    
    <이벤트 객체와 인라인 핸들러>
    = 인라인 핸들러에서는 이벤트 객체를 함수의 매개변수로 직접 받아 사용할 수 있다
        ex) <button onClick={(e) => {console.log(e);}}>click</button>  // 출력값 : SyntheticBaseEvent 
        - 코드에서 'e'는 이벤트 객체를 의미
        - 보통 'e' 또는 'event'라는 이름을 사용
        - e를 넣을 때 상황 : 이벤트 핸들러에서 이벤트 객체를 사용해야 할 때 사용 ex) e.target.value, e.preventDefault() 등
        - e를 넣지 않아도 될 때 상황 : 이벤트 핸들러에서 이벤트 객체를 사용하지 않을 때는 생략 가능 ex) <button onClick={() => {alert('clicked!');}}>click</button>

    = 리액트는 '타입스크립트' 환경에서도 이벤트 객체의 타입을 자동으로 추론하므로 타입을 명시하지 않아도 기본적인 속성과 메서드를 사용할 수 있다
    = 예를 들어 'e.target.value, e.preventDefault()'같은 메서드는 타입을 생략해도 문제없이 작동
        target : 이벤트가 발생한 요소

    <이벤트 객체와 함수 참조>
    = '함수 참조' 방식에서는 이벤트 핸들러에 이벤트 객체를 직접 전달하지 않아도 리액트가 자동으로 이벤트 객체를 해당함수의 첫 번째 매개변수로 전달
        ex)
        const clickHandler = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            console.log(e)
        } 
        <button onClick={clickHandler}>click</button> // 출력값 : SyntheticBaseEvent
            - 타입 명시 : React.MouseEvent<HTMLButtonElement, MouseEvent> / HTMLButtonElement : 이벤트가 발생한 요소의 타입 / MouseEvent : 이벤트의 타입
                타입 명시 : 이벤트 객체 타입값에 어떤 데이터 타입이 들어와야 하는지 직접 지정해주는 것
    
    = '함수 참조' 방식에서 이벤트 객체를 사용하려면 참조 함수에 타입을 명시해야 한다
    = 그런데 이벤트 객체의 타입은 'JSX요소'와 이벤트 종류에 따라 달라지므로 정확히 외우기는 어렵다 이럴 때 '타입 추론'을 활용
        Tip) 타입 추론 : 프로그래밍 언어에서 명시적으로 타입을 지정하지 않아도 컴파일러(프로그래밍 언어(C,Jave 등) 컴퓨터가 이해하는 언어로 변경)나 인터프리터(코드를 실행하는 프로그램)가 변수나 표현식의 타입을 자동으로 유추하는 기능 ex) const num = 10; // num은 자동으로 number 타입으로 추론
    = 따라서 '함수 참조' 방식에서는 타입을 명시하지 않아도 이벤트 객체의 기본적인 속성과 메서드를 사용할 수 있다

    <이벤트 객체와 매개변수>
    = 이벤트 핸들러에 이벤트 객체와 추가 매개변수를 모두 전달해야 하는 경우에는 '함수 참조' 방식을 사용할 수 없다
    = 이런 경우에는 '인라인 핸들러' 방식을 사용해 이벤트 객체와 원하는 매개변수를 명시적으로 전달해야 한다
            ex)
            const clickHander = (       
                e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                message: string
            ) => {
                console.log(e)
                alert(message)
            }
            <button onClick={(e) => clickHander(e, 'Hello!')}>click</button>
                - 인라인 핸들러에서 이벤트 객체 'e'를 클릭핸들러 함수에 전달하고, 추가 매개변수 'message'도 함께 전달

    = '함수 참조' 방식은 이벤트 객체 하나만 자동으로 전달할 수 있다
    = 따라서 매개변수가 2개 이상이면 '인라인 핸들러' 방식으로 전달
    = 특히 이벤트 객체와 사용자가 원하는 값을 함께 전달해야 할 때는 '인라인 핸들러' 방식을 사용
*/
