import {useState} from 'react'
import Count from './Count'

// 첫 번째 방법
// export default function UseReducerHook() {
//     const [count, setCount] = useState(0);
//   return (
//     <>
//         <Count count={count} setCount={setCount} />
//     </>
//   )
// }

// import React from 'react'

// export default function UseReducerHook() {
//     const [count, setCount] = useState(0);
//   return (
//     <div>
//         <Count count={count} setCount={setCount}/>
//     </div>
//   )
// }











// 두 번째 방법
// export default function UseReducerHook() {
//     const [count, setCount] = useState(0);
//     const increment = () => setCount((count) => count + 1);
//   return (
//     <>
//         <Count count={count} increment={increment} />
//     </>
//   )
// }

export default function UseReducerHook() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1);
  return (
    <div>
        <Count count={count} increment={increment}/>
    </div>
  )
}



























/*
    상태 전달하기
    = 리액트 훅으로 정의한 상태, 상태 변경 함수, 액션 발생 함수는 하나의 데이터처럼 취급한다
    = 그래서 이를 다른 컴포넌트에 props로 전달해 재사용할 수 있다 
    = 예를 들어 useState 훅으로 정의한 count 상태와 setCount() 함수를 하위 컴포넌트인 Count에 전달하려 할 때는 다음과 같이 작성
        ex)1.1
            export default function UseReducerHook() {
                    const [count, setCount] = useState(0);
                    - count 상태를 선언하고 초깃값으로 0을 설정
                    - 상태 변경 함수인 setCount()도 함께 반환

                return (
                    <>
                        <Count count={count} setCount={setCount} />
                        - count와 setCount()를 props로 Count 컴포넌트에 전달
                        - 그러면 하위 컴포넌트에서도 상태 값을 표시하거나 변경할 수 있다
                    </>
                )
            }
    
    = 부모 컴포넌트에서 전달한 count와 setCount()를 Count(자식 컴포넌트) 컴포넌트에서 사용하려면 props 객체의 타입을 명확하게 정의
    = 타입스크립트를 사용할 때 props의 타입을 명확히 지정하지 않으면 타입 추론이 제대로 되지 않아 컴파일 오류 또는 경고가 발생
    = 이때 오류 메시지를 보려면 Count 컴포넌트에 다음 처럼 빈 형태라도 코드를 작성
        ex) 빈형태로 작성
            import React from 'react'
            
            export default function Count() {
                return (
                    <div>Count</div>
                )
            }

        

        ex)1.2
            import React, { Dispatch, SetStateAction } from 'react'
            - setCount()의 타입을 명시하려면 Dispatch와 SetStateAction을 react 패키지에서 불러온다
                Dispatch : setCount() 함수가 특정 타입의 상태를 변경하는 함수임을 명시
                SetStateAction : 상태 값을 직접 바꾸는 것 / 상태 변경 함수를 이용해 상태를 업데이트하는 것 모두 허용하는 타입이다
                SetStateAction<number> : number 타입의 상태를 변경하는 함수임을 명시
                useReducer : 정해진 규칙에 따라 상태를 변화시키는 방식

            export default function Count({count, setCount} 
            - props 객체를 구조 분해 할당해 count와 setCount를 바로 사용한다

            : {count : number, setCount : Dispatch<SetStateAction<number>>}) {
                Dispatch : setCount() 함수가 number 타입의 상태를 변경하는 함수임을 명시
            - props 객체의 타입을 명확하게 지칭한다
            - 타입을 명확하게 지정하면 부모 컴포넌트에서 정의한 상태(count)와 상태 변경 함수(setCount)를 를 자식 컴포넌트에서 props로 안전하게 전달받아 사용할 수 있다
                return (
                    <>
                        <h1>COunt : {count}</h1>
                        <button onClick={() => setCount((count) => count + 1)}>증가</button>
                    </>
                )
            }

    = 상태 변경 함수를 자식 컴포넌트에 직접 전달하는 대신 부모 컴포넌트에서 별도로 함수를 정의해 전달할 수 있다
        ex)2.1
            export default function UseReducerHook() {
            const [count, setCount] = useState(0);
            const increment = () => setCount((count) => count + 1);
                return (
                    <>
                        <Count count={count} increment={increment} />
                    </>
                )
            }   
    
    = Coount 컴포넌트에서는 전달받은 increment() 함수의 타입을 지정
    = 타입스크립트에 익숙해지면 increment() 함수가 매개변수도 없고 반환 값도 없는 함수라는 것을 바로 알 수 있다
    
            ex)2.2
                import React, { Dispatch, SetStateAction } from 'react'
                
                export default function Count({count,  increment} : {count : number, increment : () => void}) {
                    return (
                        <>
                            <h1>Count : {count}</h1>
                            <button onClick={increment}>증가</button>
                        </>
                    )
                }

    = 두 방법은 상태를 변경하는 방식에 차이가 있을 뿐 실행결과는 동일하다
    = 첫번째 : setCount() 함수를 props로 전달해 자식 컴포넌트에서 직접 setCount(count) -> count + 1을 실행해 상태를 변경
    = 두번째 : increment() 함수를 부모 컴포넌트에서 정의하고 이 함수를 자식 컴포넌트로 전달해 setCount()를 실행
    = useState 훅으로 정의한 상태와 상태 변경 함수를 전달했지만 useReducer 훅으로 정의한 상태와 액션 발생 함수를 전달해도 같은 원리로 동작 
    = 즉 어떤 리액트 훅을 사용하든 상태와 상태를 변경하는 함수를 props로 전달해 자식 컴포넌트에서 활용할 수 있다는 점은 동일하다
    
    Tip) <자식 컴포넌트에 상태 변경 함수를 직접 전달 vs 상태 변경 로직을 담은 함수를 전달 : 상태 변경 로직을 담은 함수를 전달하는 것이 더 좋은 이유>
    1. 캡슐화
    <첫번째>
    - 상태 변경의 구체적인 방식까지 자식 컴포넌트에 노출
    - 이는 자식이 상태를 어떻게든 바꿀 수 있도록 허용하는 것이므로 캡슐화가 깨진 상태
    <두번째>
    - 상태 변경 로직을 부모 컴포넌트 내부에 숨기고 자식은 단순히 제공된 함수를 호출하기만 하므로 캡슐화가 잘 유지

    2. 함수의 올바른 사용
    <첫번째>
    - 자식 컴포넌트가 setCount()를 임의로 호출하거나 비정상적인 값으로 변경할 수 있다
    <두번째>
    - 미리 정의한 로직대로만 동작하기 때문에 의도하지 않은 방식으로 상태가 변경되는 위험을 줄일 수 있다

    3. 유지보수성
    <첫번째>
    - 추후 요구사항이 바뀔 경우 setCount()를 사용하는 자식 컴포넌트를 일일이 찾아서 코드를 수정해야 할 수 있다
    <두번째>
    - 부모에서 정의한 함수의 로직만 수정하면 되므로 기능 변경이나 유지보수가 훨씬 수월하다

    4. 의도 전달
    <첫번째>
    - setCount()와 같은 일반적인 함수 이름만으로 해당 함수가 어떤 동작을 하는지 파악하기 어렵다
    <두번째>
    - increment()처럼 의미 있는 이름을 가진 함수를 전달하면 코드를 읽는 사람도 이 함수가 어떤 목적을 가지고 있는지 쉽게 이해할 수 있다

    = 이는 절대적인 기준이 아니며 상황에 따라 방식을 선택
    = 첫 번째 방법이 더 간단할 수 있고 복잡한 상태 관리나 재사용이 필요한 경우에는 두 번째 방법이 더 유리하다
*/
