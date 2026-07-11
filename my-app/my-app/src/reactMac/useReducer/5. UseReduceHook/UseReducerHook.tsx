// import {useState} from 'react'
// import CountDisplay from './CountDisplay'
// import ConutButton from './ConutButton'

// export default function UseReducerHook() {
//     const [count, setCount] = useState(0);
//     const incerement = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     const reset = () => setCount(0);
//   return (
//     <>
//         <CountDisplay count={count} />
//         <ConutButton incerement={incerement} decrement={decrement} reset={reset} />
//     </>
//   )
// }



import {useState} from 'react'
import CountDisplay from './CountDisplay';
import ConutButton from './ConutButton';

export default function UseReducerHook() {
    const [count, setCount] = useState(0);
    const incerement= () => setCount(count + 1);
    const decrement =() => setCount(count - 1);
    const reset =() => setCount(0);
  return (
    <div>
        <CountDisplay count={count} />
        <ConutButton incerement={incerement} decrement={decrement} reset={reset} />
    </div>
  )
}







/*
    상태 끌어올리기
    = 여러 컴포넌트에서 공유해야 하는 상태를 가장 가까운 공통 부모 컴포넌트로 이동시키는 과정
    = 이렇게 상태를 끌어올리면 부모 컴포넌트가 상태를 중앙에서 관리하고 자식 컴포넌트들은 props를 통해 상태 값을 전달받기 때문에 상태를 일관되게 관리할 수 있다

    <1. 컴포넌트 구조>
    - App 컴포넌트(부모)
    import React from 'react'
    import CountDisplay from './CountDisplay'
    import ConutButton from './ConutButton'

    export default function UseReducerHook() {
    return (
        <>
            <CountDisplay />
            <ConutButton />
        </>
    )
    }


    - CountDisplay 컴포넌트 : 카운트 값을 화면에 표시하는 역할 (const 정의)
    import {useState} from 'react'
    
    export default function ConutButton() {
        const [count, setCount] = useState(0);
        const incerement = () => setCount(count + 1);
        const decrement = () => setCount(count - 1);
        const reset = () => setCount(0);
      return (
        <div>
            <button onClick={incerement}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
      )
    }
    

    - CountButton 컴포넌트 : 카운트 값을 증가, 감소, 초기화하는 버튼을 제공하는 역할 (const 정의, 버튼 클릭 이벤트 핸들러 정의)
    import {useState} from 'react'
    
    export default function CountDisplay() {
        const [count, setCount] = useState(0);
      return (
        <>
            <h1>Count : {count}</h1>
        </>
      )
    }
    = 위 코드를 실행하고 버튼을 클릭해도 화면에 표시된 Count 값이 전혀 바뀌지 않는다 
    = 이유는 CountDisplay 컴포넌트와 CountButton 컴포넌트가 각각 독립적으로 count 상태를 관리하기 때문이다
    = 즉 버튼을 클릭하면 CountButton 안에 있는 count 값만 바뀌고 CountDisplay는 여전히 자신만의 useSate(0)에서 선언한 초깃값을 보여줘서 화면에는 변화가 없다
    = 이러한 컴포넌트에서 동일한 상태를 공유해야 할 경우에는 공통 부모 컴포넌트로 상태를 끌어올려야 한다
    = 리액트에서는 데이터가 항상 '부모 -> 자식' 방향으로만 전달 되므로 자식 컴포넌트끼리 상태를 공유하려면 공통 부모에 상태를 정의하고 그 상태를 props를 통해 자식에게 전달해야 한다
    = 따라서 부모 컴포넌트에서 count 상태를 관리하고 CountDisplay와 CountButton 컴포넌트는 각각 props를 통해 상태 값을 전달받아 사용하도록 구성

    <2. 상태 끌어올리기 적용>
    - App 컴포넌트(부모)
    import {useState} from 'react'
    import CountDisplay from './CountDisplay'
    import ConutButton from './ConutButton'

    export default function UseReducerHook() {
        const [count, setCount] = useState(0);
        const incerement = () => setCount(count + 1);
        const decrement = () => setCount(count - 1);
        const reset = () => setCount(0);
    return (
        <>
            <CountDisplay count={count} />
            <ConutButton incerement={incerement} decrement={decrement} reset={reset} />
        </>
    )
    }


    - CountDisplay 컴포넌트 : 카운트 값을 화면에 표시하는 역할 (props로 count 전달)
    import {useState} from 'react'

    export default function CountDisplay({count} : {count : number}) {
    return (
        <>
            <h1>Count : {count}</h1>
        </>
    )
    }


    - CountButton 컴포넌트 : 카운트 값을 증가, 감소, 초기화하는 버튼을 제공하는 역할 (props로 이벤트 핸들러 전달)
    import {useState} from 'react'

    export default function ConutButton({incerement, decrement, reset} : {incerement : () => void, decrement : () => void, reset : () => void}) {
    return (
        <div>
            <button onClick={incerement}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    }
    = '상태 끌어올리기'는 여러 컴포넌트 간에 상태를 공유할 때 가장 기본적이면서도 효과적인 방법
    
    Tip)
        - useReducer 훅을 사용할 때도 마찬가지 액션 발생 함수를 자식 컴포넌트에서 사용하려면 상태를 부모 컴포넌트에서 정의한 후 props로 전달해야 한다
*/
