import { useReducer } from "react"
import CounterReducer from "./CounterReducer"

// export default function UseReducerHook() {
//     const [count, countDispatch] = useReducer(counterReducer, 0);
//     return (
//         <>
//             <h1>Count: {count}</h1>
//             <button onClick={() => countDispatch({type: "INCREMENT"})}>Increment</button>
//             <button onClick={() => countDispatch({type: "RESET"})}>Reset</button>
//             <button onClick={() => countDispatch({type: "DECREMENT"})}>Decrement</button>
//         </>
//     )
// }

import React from 'react'

export default function UseReducerHook() {
    const [count, countDispatch] = useReducer(CounterReducer, 0);
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={() => countDispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={() => countDispatch({type: "RESET"})}>Reset</button>
        <button onClick={() => countDispatch({type: "DECREMENT"})}>Decrement</button>
    </>
  )
}







/*
    useReducer 훅 사용하기
    throw(트로우) new Error : 예외를 발생시키는 함수. 이 함수는 주어진 메시지를 포함하는 새로운 Error 객체를 생성하고 예외를 발생시킨다 / 예외 처리를 위해 사용 
        / 이 코드가 실행되면 현재 실행 중인 함수의 실행이 중단되고 제어가 호출자에게 전달 / 호출자는 이 예외를 처리하거나 다시 던질 수 있다

    <버튼 클릭시 증가,감소,리셋 예제>
        import { useReducer } from "react"
        - 'useReducer'는 리액트에서 제공하는 내장 훅이므로 'react' 패키지에서 'import'한다

        function counterReducer(state : number, action : {type : string}){
        - state : 이전 상태값, 이 예제에서는 'number타입'
        - action : 상태를 변경할 때 참조할 정보가 담긴 객체, type 속성을 포함 / 상태를 어떻게 바꾸고 싶은지 적어서 전달하는 일종의 메시지 객체 / 즉 담당자에게 전달하는 업무

                switch(action.type){
                - 'switch문'을 사용해 'action.type'의 값에 따라 상태 변경 로직을 실행

                case "INCREMENT":
                    return state + 1
                    - 이전 상태에 1을 더함

                case "DECREMENT":
                    return state - 1
                    - 이전 상태에서 1을 뺌

                case "RESET":
                    return 0
                    - 상태를 초기값인 0으로 리셋

                default:
                    throw new Error(`Unhandled action type: ${action.type}`) 
                    - 정의하지 않은 액션이 전달되면 오류를 발생시켜 예외 처리
            }

        }

        export default function UseReducerHook() {
            const [count, countDispatch] = useReducer(counterReducer, 0);
            - 'useReducer(counterReducer, 0)'을 호출하면 초깃값이 0인 '상태변수(count)'와 '액션 발생 함수(countDispatch)'가 반환
            - 'useReducer' 훅은 이 둘을 배열 형태로 반환하므로 구조 분해 할당을 통해 각각 변수로 나누어 받을 수 있다 
            - 초깃값이 0을 지정했기 때문에 상태 값의 타입은 'number'로 자동 추론

            return (
                <>
                    <h1>Count: {count}</h1>
                    <button onClick={() => countDispatch({type: "INCREMENT"})}>Increment</button>
                    <button onClick={() => countDispatch({type: "RESET"})}>Reset</button>
                    <button onClick={() => countDispatch({type: "DECREMENT"})}>Decrement</button>
                    - 버튼의 'onClick' 이벤트 핸들러에서 'countDispatch()'를 호출해 액션을 리듀서 함수에 전달
                    - 이 코드가 실행되면 액션이 'countDispatch()'함수로 전달
                    - 이에 따라 상태가 변경
                    - 이때 액션 객체의 타입 구조는 'countDispatch()' 함수에서 정의한 'action' 매개변수의 타입'({type : string})'과 반드시 일치해야 한다
                </>
            )
        }


    <useReducer 훅의 작동 원리>
    1. 'countDispatch()' 함수는 액션 객체를 받아 'useReducer' 훅의 첫 번째 인자인 'counterReducer' 함수를 호출
    2. '1'에서 전달된 액션은 'action' 매개변수를 전달
    3. 'countDispatch()'함수는 두개의 매개변수를 받는다 
        (첫 번째)
        - 매개변수는 이전 상태 값(state)으로 컴포넌트가 처음 렌더링될 때는 초기값이 전달
        - 이후에는 이전 렌더링에서 리듀서가 반환한 상태 값이 전달
        (두 번째)
        - 매개변수는 액션 객체(action)로 이벤트 핸들러에서 전달한 값
        - 'countDispatch()'함수는 'action.type'에 따라 상태 변경 로직을 실행한 뒤 변경된 새로운 상태 값을 반환
    4. 반환한 값은 'useReducer' 훅에 상태 값이 되어 컴포넌트에 반영

    <리듀서 함수 분리>
    = 'useReducer' 훅에서 사용하는 리듀서 함수는 별도의 파일로 분리해서 관리할 수 있다
    = 리듀서 함수를 분리하면 코드의 재사용성과 가독성이 높아지고 상태 로직을 더 체계적으로 관리할 수 있다
    = 리듀서 함수를 분리하면 코드가 더 깔끔하고 모듈화(복잡한 시스템을 작은 단위(모듈)를 나누어 관리)되며 여러 컴포넌트에서 같은 리듀서를 재사용할 수 있어 중복 코드 감소
    = 또한 상태 변경 로직을 한곳에 모아두면 유지보수와 테스트가 쉬워지고 'useReducer' 훅을 여러 개 사용하는 경우에도 상태별로 로직을 분리해 체계적으로 관리할 수 있다
    = 리듀서 함수는 분리하더라도 'useReducer' 훅과 함께 정상적으로 작동
    = 훅과 리듀서를 분리하는 것은 매우 일반적인 패턴

    Tip) 파일 확장자
    - 'counterReducer.ts'는 리액트 컴포넌트가 아니고 'JSX'를 전혀 사용하지 않아서 'JSX'를 해석할 필요가 없다 
    - 따라서 '.tsx'확장자를 쓸 이유가 없고 더 명확하게 목적에 맞게 '.ts' 확장자를 사용하는 것이 좋다
        .tsx : 'JSX'를 포함하는 리액트 컴포넌트 파일
        .ts : 'JSX'를 포함하지 않는 일반 TypeScript 파일

*/
