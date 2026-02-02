// import User from './User'

// export default function Component7() {
//     return <User name = '철수' age = {20}/>
// }


import React from 'react'
import User from './User'

export default function Component7() {
    return (
        <>
            <User name='철수' age={32} body="180cm"/>
        </>
    )
}



/*
    컴포넌트와 props 객체
    = 리액트에서 '부모 컴포넌트'가 '자식 컴포넌트'에 데이터를 전달할 수 있다

    <props 객체란>
    = 컴포넌트를 마치 HTML 태그처럼 사용해 값을 속성 형태로 전달
    = 예를 들어 '부모 컴포넌트'에서 '자식 컴포넌트'의 데이터를 전달

    ex)
        [App]
            import User from './User'

            export default function App() {
                return <User name = '철수'/>
            }
        - 코드에서 '<User name = '철수'/>'는 'User 컴포넌트' 를 화면에 렌더링하면서 name이라는 속성의 값으로 '철수'함께 전달
        - 여러 데이터를 전달하고 싶다면 속성을 여러 개 추가

            [수정]
            export default function 컴포넌트_이름() {
                return <User name = '철수' age = {20}/>
            }
            - 리액트에서는 '부모 컴포넌트'가 '자식 컴포넌트'에 전달한 모든 속성을 하나의 객체로 모아서 '자식 컴포넌트'로 전달
            - '부모 컴포넌트(App)'에서 'User 컴포넌트'에 'name'과 'age'를 전달하더라도 리액트 내부에서는 이 데이터를 '단일 객체 형태'로 전달
            - 이 객체를 'props 객체'라고 한다
            - props는 '부모 컴포넌트'가 '자식 컴포넌트'에게 넘겨주는 모든 데이터가 담긴 객체
            - '자식 컴포넌트'는 전달받은 props 객체를 함수의 매개변수로 받는다


        [User]
            import React from 'react'

            1. export default function User(props) {
            - 'props'는 부모(App) 컴포넌트에서 전달한 모든 속성을 하나의 객체로 받는다
            - 만약 밑에 오류 밑줄이 나오는 이유는 타입을 설정하지 않아서 이다

                2. console.log(props)
                - 전달받은 데이터를 'console.log(props)'로 콘솔에 출력

                3. return <div>User Component</div>
                - 화면에 렌더링
            }
            - 데이터는 개별 값이 아닌 하나의 객체로 묶여 props로 전달된다
            - props는 객체이기 때문에 '자식 컴포넌트'에서는 객체 형식으로 접근해야 한다
            - '자바스크립트'에서는 props에 타입을 지정하지 않아도 실행에 문제가 없다
            - 하지만 '타입스크립트'에서는 props 객체의 '구조와 타입을 명확히 지정'해주는 것이 가장 좋다
            - 타입을 지정하지 않으면 코드 에디터의 자동완성 기능이나 오류 검사가 제대로 동작하지 않을 수 있다

            [수정]
                import React from 'react'
                
                1, export default function User(props) {
                - props의 타입을 명시
                - 이 객체는 name(문자열)과 age(숫자) 속성을 가져야 한다
                - 잘못된 타입을 전달하면 타입스크립트가 컴파일(프로그래밍 언어(C,Jave 등) 컴퓨터가 이해하는 언어로 변경) 시점에 오류가 발생

                    return (
                        <>
                            2.  <p>name : {props.name}</p>
                                <p>age : {props.age}</p>
                            - 속성에는 'props.name, props.age'처럼 점 표기법을 사용해 접근
                            - props는 객체이므로 해당 키를 통해 값을 꺼내 사용하는 방식
                        </>
                    )
                }

    Tip) 
        부모 컴포넌트는 데이터를 props로 전달
        자식 컴포넌트는 데이터를 props를 받아 사용
*/
