// import React from 'react'
// import User from './User'

// export default function Component9() {
//     const UserObj = {
//         name : '홀길동',
//         age : `28세`,
//     }

//     const clickHandler = () =>{
//         console.log('클릭')
//     }
//     return (
//         <>
//             <User UserObj = {UserObj} clickHandler = {clickHandler}/>
//         </>
//     )
// }

import React from 'react'
import User from './User'

export default function Component9() {
    const UserObj = {
        name : '홀길동',
        age : 28,
        body : '리액트 공부중'
    }

    const handlerClick = () => {
        console.log('클릭')
    }
    return (
        <>
            <User Obj = {UserObj} Handler={handlerClick}/>
        </>
    )
}





/*
    props 객체의 구조 분해 할당과 타입 정의
    <매개변수에서의 구조 분해 할당>
    = 'props'는 단일 객체이므로 부모 컴포넌트에서 속성을 몇십 개 지정해도 결국 하나의 props 객체로 전달된다
    = 이때 구조 분해 할당을 사용하면 객체의 속성을 더 간단하게 변수에 할당할 수 있다
    = '구조 분해 할당(destructuing asssignment)'은 객체나 배열의 속성을 추출해 변수에 할당하는 자바스크립트 문법
    = 'UserObj' 객체의 속성(name,age)까지 한번에 구조 분해 할당하면 'UserObj'도 생략되어 코드가 더 간결

        1. export default function User(props) -> export default function User({UserObj, clickHandler}) 
        - '{UserObj, clickHandler}'는 props 객체에서 UserObj와 clickHandler라는 두 속성을 꺼내는 구조 분해 할당 

        2. name : {props.UserObj.name}... -> name : {UserObj.name}...
        - 구조 분해 항당으로 props를 받아오면 JSX에서 props.UserObj.name 대신 UserObj.name으로 간결하게 접근
    
        3. export default function User({UserObj, clickHandler}) -> export default function User({UserObj : {name, age}, clickHandler})
        - 'UserObj' 객체를 다시 구조 분해 할당해서 name과 age 값을 설정

        4. name : {UserObj.name}.. -> name : {name}..
        - 구조 분해 할당은 매개변수에서 바로 처리되므로 '{UserObj.name}..'대신 '{name}'만 사용

    <함수 내부에서 구조 분해 할당>
    = 구조 분해 할당을 꼭 매개변수에서 하지 않아도 된다
    = props를 그대로 받아 함수 내부에서 분해해도 같은 효과를 얻을 수 있다

        1. export default function User({UserObj : {name, age}, clickHandler}) 
            -> export default function User(prosp: {
                UserObj : {name : string; age : Number;};
                clickHandler : () => void(반환값(함수가 돌려주는 값)이 없는 함수);
                }) {
                const {
                    UserObj : {name,age},
                    clickHandler,
                } = props; // 함수 내부에서 구조 분해 할당
                - 이 방식은 props 전체를 일단 받고 구조 분해 할당을 코드 흐름 중간에서 명확하게 처리하고 싶을 때 유용
                - 또한 함수 선언부가 짧아서 함수 시그니처를 더 깔끔하게 만들 수 있다

    <타입 정의>
    = 'UserObj'와 'clickHandler' 속성을 가진 props의 타입을 한 줄에 모두 작성하면 함수 매개변수의 타입이 너무 길고 복잡해 보일 수 있다
    = 이럴 때는 타입스크립트의 '인터페이스'를  사용해 props 타입을 따로 정의
        Tip) 인터페이스(interface : 속성정의,타입명시) 대신 type 키워드로 사용해 동일한 효과를 얻을 수 있다 type 키워드를 사용해 타입의 정의하는 것을 '타입 별칭'이라 한다
    = 이렇게 정의한 인터페이스를 리액트에서는 '.d.ts' 파일로 분리할 수 있다
    = 이러한 '타입 선언 전용 파일(.d.ts)'일반적으로 src/type 폴더에 모아 관리
    = 이 파일은 따로 임포트하지 않아도 타입을 사용할 수 있다
    = 실무에서 자주 사용
*/