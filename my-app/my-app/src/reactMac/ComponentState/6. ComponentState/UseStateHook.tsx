import React from 'react'
import { useState } from 'react'

export default function UseStateHook() {
    const [count,setCount] = useState(0);

    const clickHandler = () => setCount(count => count + 1);
    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={clickHandler}>click</button>
        </>
    )
}

/*

    import { useState } from 'react'
    - 'useState'는 리액트의 내장 훅이므로 'react' 패키지에서 직접 임포트해서 사용

    const [count,setCount] = useState(0);
    - 'useState(0)'을 호출해 'count'라는 상태를 선언하고 초깃값을 0으로 설정
    - 상태의 타입은 <number> 처럼 제네릭(useState<number>(0))으로 명시할 수 있지만 타입스크립트는 초깃값을 기준으로 타입을 추론하므로 생략해도 무방

    const clickHandler = () => setCount(count => count + 1);
    - 'clickHandler()'함수는 버튼을 클릭할 대상으로 실행되어 'count' 상태 값을 1씩 증가
    - 콜백함수의 매개변수로 업데이트 직전의 상태 값이 전달되므로 이를 기반으로 새로운 값을 계산할 수 있다


    useState Hook
    = 리액트에서는 상태 값이 변경되면 해당 상태를 정의한 컴포넌트를 자동으로 리렌더링해 새로운 상태 값이 화면에 반영되도록 처리
    = useState Hook은 함수형 컴포넌트에서 상태 관리를 가능하게 해주는 리액트 훅 중 하나
    = useState Hook을 사용하면 함수형 컴포넌트 내에서 상태 변수를 선언하고, 해당 상태를 업데이트할 수 있는 함수를 제공받을 수 있음
    

    <useState 상태관리 흐름>
    1. useState 훅으로 상태를 생성
    2. '상태_변경_함수(새로운 값)'을 호출해 상태로 변경
    3. 리액트는 이전 상태 값과 새로운 값을 비교해 변경 여부를 판단
    4. 상태가 변경되었다면 해감 컴포넌트를 리렌더링한다

    Tip) 콜백함수 형태로 작성하는 방식을 더 권장 이 방식은 상태 값을 안전하게 참조할 수 있어 예기치 않은 문제를 방지할 수 있다
*/
