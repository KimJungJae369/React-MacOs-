import { useReducer, useState } from "react"

// export default function UseReduceHook(state : number, action : {type : string}) {
//     switch(action.type){
//         case "INCREMENT" : {
//             return state + 1
//         }

//         case "DECREMENT" : {
//             return state - 1
//         }

//         case "RESET" : {
//             return 0
//         }

//         default : {
//             return state
//         }
//     }
//   return (
//     <></>
//   )
// }

import React from 'react'

export default function UseReduceHook(state : number, action : {type : string}) {
    switch(action.type){
            case 'INCREMENT' : {
                return state + 1;
            }
            case 'DECREMENT' : {
                return state - 1;
            }
            case 'RESET' : {
                return 0;
            }
            default : {
                return state;
            }
    }
  return (
    <div>UseReduceHook</div>
  )
}








/*
    UseReduceHook : 복잡한 상태 관리
    = 상태를 관리하는 또 다른 방법으로 '이전 상태'와 '액션'에 따라 새로운 상태를 반환하는 방식
    = 특히 '상태 변경 로직'이 복잡하거나 업데이트해야 하는 경우가 많으면 'useState'보다 더 적합하다
    = 쉽게말해 '상태 변경 로직'을 컴포넌트에서 분리하여 별도의 함수로 관리할 수 있게 해주는 훅
    = 상태를 바꾸는 규칙이 여러 개고 복작할 때 사용
    = 상태 업데이트 로직이 복잡해져서 하눈에 파악하기 힘들 때 로직을 컴포넌트 밖으로 분리해 관리할 때 사용
    = 'useReducer' 훅은 '리듀서 함수'와 '초깃값'을 매개변수로 받아서 상태와 디스패치 함수를 반환
    = '리듀서 함수'는 상태를 변경하는 함수로 '이전 상태'와 '액션'을 받아서 새로운 상태를 반환
    = '액션'은 상태 변경을 일으키는 이벤트나 명령을 나타내는 객체로 보통 'type'과 'payload' 속성을 가진다
    = '디스패치 함수'는 액션을 리듀서 함수로 전달하는 함수로 이 함수를 호출하면 리듀서 함수가 실행되고 새로운 상태가 계산된다
    = 'useReducer' 훅은 상태 변경 로직을 컴포넌트에서 분리하여 별도의 함수로 관리할 수 있게 해주므로 복잡한 상태 관리에 유용
    = 'useState'보다 더 명확하게 상태 변경 로직을 표현할 수 있고, 여러 상태 변경이 연관되어 있을 때 일관된 방식으로 관리할 수 있다
    = 'useReducer'는 'Redux'와 같은 상태 관리 라이브러리의 핵심 개념인 '리듀서' 패턴을 따르므로, 리액트 애플리케이션에서 복잡한 상태 관리를 구현하는 데 도움이 된다

    1. useReducer 훅 기본 문법
    = 'useReducer' 훅을 호출하면 2개의 값을 담은 배열을 반환
    = 이 값을 구조 분해 할당하여 '상태'와 '디스패치 함수'로 사용할 수 있다 
        const [state, dispatch] = useReducer<Type>(reducer, initialState);
        <state>
        - 상태를 나타내는 '상태 변수'로 'useReducer' 훅이 반환하는 첫 번째 값을 저장
        - 보통 관리하려는 상태의 의미에 맞는 이름으로 저장

        <dispatch>
        - '리듀서 함수'에 액션을 전달하는 함수 // 액션 : 상태 변경을 일으키는 이벤트나 명령을 나타내는 객체
        - 이 함수를 호출하면 '리듀서 함수'가 실행되고 새로운 상태가 계산된다
        - 흔히 '액션 발생 함수'라고 하며 보통 식별자는 상태 변수 이름에 'Dispatch'를 붙여서 사용
        - 예를 들어 상태 변수가 'count'라면 디스패치 함수는 'countDispatch'로 명명하는 것이 일반적

        <type>
        - 'useReducer'훅이 반환하는 상태 값의 타입을 '제네릭'으로 저장
        - 대부분의 경우 타입스크립트가 초깃값을 기준으로 타입을 추론하므로 생략할 수 있다
        - 그러나 초깃값과 이후에 처리할 때 데이터의 타입이 다를 경우 타입을 명시해주는 것이 안전하다
        
        <reducer>
        - 'useReducer' 훅의 첫 번째 매개변수는 리듀서 함수 
        - '리듀서 함수'는 상태를 변경하는 함수로 '이전 상태'와 '액션'을 받아서 새로운 상태를 반환 

        <initialState>
        - 상태의 초깃값
        - 생략할 경우 'undefined'가 반환

    <액션과 액션 발생함수>
    = 액션은 리듀서 함수에서 어떤 상태 변경을 수행할지 결정하기 위해 참조하는 값
    = 리듀서 함수 내부에는 여러 상태 변경 로직이 존재할 수 있으며 액션의 내용을 기반으로 어떤 로직을 실행할지 선택
        {type : 'ACTION_TYPE', payload : 데이터}
        <type>
        - 액션의 종류를 나타내는 속성
        - 문자열 작성하고 보통 대문자로 '스네이크 케이스'로 작성
            Tip)
                스네이크 케이스 : 여러 단어롤 구성된 이름을 모두 대문자로 표기하고 단어 사이를 밑줄(_)로 구분하는 표기법            
        
        <payload>
        - 선택 속성으로 상태 변경에 필요한 데이터를 담는다
        - 예를 들어 다음과 같이 액션에 'INCREMENT'라는 유형의 액션이 5만큼 증가하는 동장을 수행
            {type : 'INCREMENT', payload : 5}
            - 정의한 액션은 액션 발생 함수를 통해 리듀서 함수로 전달

            dispatch({type : 'ACTION_TYPE'})
            - 일반적으로 액션은 객체로 정의하는 것이 가독성과 유지보수 면에서 좋다
            - 그러나 리듀서 함수의 설계에 따라 숫자, 문자열, 배열, 함수 등 다양한 형태의 액션을 사용할 수 있다
                Tip)
                    - 액션은 꼭 객체일 필요는 없으며 객체라고 해도 반드시 'type,payload' 속성을 가져야 하는 것은 아니다
                    - 중요한 것은 액션이 상태 변경의 기준이 된다는 것이고 그 형식은 구현 방식에 따라 자유롭게 설정할 수 있다

    <리듀서 함수 = reducer>
    = '이전 상태(state)'와 '액션(action)'을 매개변수로 받아 새로운 상태를 반환하는 함수
    = 이때 반환하는 값이 컴포넌트의 새로운 상태 값이 된다
    = 리듀서 함수 내부에서는 주로 'switch'문을 사용해 'action.type'에 따라 실행할 로직을 결정
        function UseReduceHook(state : StateType, action:ActionType) {
        switch(action.type){
            case 'ACTION_TYPE_1' : {
                return {...state, 변경_값} // 새로운 상태 변환
            }

            case 'ACTION_TYPE_2' : {
                return {...state, 변경_값} // 새로운 상태 변환
            }

            default : {
                return state  // 변경이 없을 경우 이전 상태 유지
            }
        }
    <리듀서 함수를 작성할 때 주의할 점>
    1. 함수 이름
    - 이름은 자유롭게 정할 수 있지마 보통 'reducer'라는 이름을 사용

    2. 상태를 직접 변경하지 말 것
    - 리듀서 함수는 상태를 변경하는 함수가 아니라 새로운 상태를 반환하는 함수
    - 기존 상태를 직접 수정하면 리액트가 변경을 감지하지 못해 오류가 발생

    3. 반드시 하나의 상태를 반환해야 함
    - 상태를 반환하지 않으면 리액트가 상태 변경을 인식하지 못해 변경이 없으면 기존 상태를 그대로 반환

    4. 모든 경우에 대해 상태를 반환하도록 작성
    - 정의하지 않은 'action.type'에서 예외가 발생하지 않도록 'default' 분기에서 기존 상태를 반환하도록 작성하는 것이 좋다

    5. 객체나 배열 상태는 전개 연산자로 복사 후 수정
    - 객체나 배열은 참조형 데이터이므로 직접 변경하면 기존 상태도 함께 변경
    - 리액트는 상태의 불변성을 원칙으로 하기 때문에 {...state} 처럼 이전 상태를 복사한 뒤 변경하는 방식으로 작성


    function UseReduceHook(state : number, action : {type : string}) {
    - 리듀서 함수의 매개변수로 전달되는 상태와 액션의 타입을 명시
    - 상태는 숫자 타입
    - 액션은 {type : string}} 형태의 객체

    switch(action.type){
        case "INCREMENT" : {
            return state + 1
        }

        case "DECREMENT" : {
            return state - 1
        }

        case "RESET" : {
            return 0
        }
        - 'switch'문을 사용해 'action.type' 값에 따라 분기 처리(다음 로직을 결정)한다

        default : {
            return state
        }
        - 정의하지 않은 'action.type'이면 기존 상태 값을 그대로 반환해 오류를 방지
    }
*/
