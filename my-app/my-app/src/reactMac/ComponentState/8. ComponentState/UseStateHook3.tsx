import {use, useState} from 'react'

// 1. 초기 타입 지정 
// export default function UseStateHook3() {
//     // 오류
//     // const [name, setName] = useState(null);
//     // const [age, setAge] = useState(null);
//     // const [gender, setGender] = useState(null);


//     // 수정
//     const [name, setName] = useState<string | null>(null)
//     const [age, setAge] = useState<number | null>(null)
//     const [gender,  setGender] = useState<string | null>(null)

//     const clickHandler = () => {
//         setName('Maike'), // 타입 오류
//         setAge(30), // 타입 오류
//         setGender('Male')   // 타입 오류
//     }
//     return (
//         <>
//             <p>이름 : {name}</p>
//             <p>나이 : {age}</p>
//             <p>성별 : {gender}</p>
//             <button onClick={clickHandler}>변경</button>
//         </>
//     )
// }

// import React from 'react'

// export default function UseStateHook3() {
//     const [name, setName] = useState<string | null>(null);
//     const [age, setAge] = useState<number | null>(null);
//     const [gender, setGender] = useState<string | null>(null);

//     const clickHandler = () => {
//         setName('Maike');
//         setAge(30);
//         setGender('Male');
//     }
//   return (
//     <>
//         <p>이름 : {name}</p>
//         <p>나이 : {age}</p>
//         <p>성별 : {gender}</p>
//         <button onClick={clickHandler}>변경</button>
//     </>
//   )
// }

































// 3. 상태 변경 함수에서 값을 직접 전달할 때 주의할 점 - 직접 전달 방식 - 
// export default function UseStateHook3() {
//     const [count, setCount] = useState(0);

//     const clickHandler = () => {
//         setCount(count + 1);
//         setCount(count + 1);
//         setCount(count + 1);
//     }
//     return (
//         <>
//             <h1>Count : {count}</h1>
//             <button onClick={clickHandler}>click</button>
//         </>
//     )
// }

// import React from 'react'

// export default function UseStateHook3() {
//     const [count, setCount] = useState(0);

//     const clickHandler = () => {
//         setCount(count + 1);
//         setCount(count + 1);
//         setCount(count + 1);
//         setCount(count + 1);
//     }
//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={clickHandler}>click</button>
//     </div>
//   )
// }


























// 3. 상태 변경 함수에서 값을 직접 전달할 때 주의할 점 - 콜백함수 전달 방식 - 
// export default function UseStateHook3() {
//     const [count, setCount] = useState(0);

//     const clickHandler = () => {
//         setCount((count) => count + 1);
//         setCount((count) => count + 1);
//         setCount((count) => count + 1);
//     }
//     return (
//         <>
//             <h1>Count : {count}</h1>
//             <button onClick={clickHandler}>click</button>
//         </>
//     )
// }

import React from 'react'

export default function UseStateHook3() {
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={clickHandler}>click</button>
    </div>
  )
}










/*
    useState 훅 사용시 주의 사항
    <1, 초기값 타입 지정>
        ex)
            const [name, setName] = useState(null);
            수정) const [name, setName] = useState<string | null>(null);

            const [age, setAge] = useState(null);
            수정) const [age, setAge] = useState<number | null>(null);

            const [gender, setGender] = useState(null);
            수정) const [gender, setGender] = useState<string | null>(null);
            - '타입 오류'를 방지하려면 초기에 상태가 'null'이더라고 나중에 저장할 타입까지 고려해 '제네릭'을 명시한다

            const clickHandler = () => {
                setName('Maike'), // 타입 오류
                setAge(30), // 타입 오류
                setGender('Male')   // 타입 오류
            }
            return (
                <>
                    <p>이름 : {name}</p>
                    <p>나이 : {age}</p>
                    <p>성별 : {gender}</p>
                    <button onClick={clickHandler}>변경</button>
                </>
            )

    = 일반적으로 'useState' 훅의 초깃값만으로 타입을 명확히 추론할수 있을 경우 제네릭을 생략해도 무방
    = 하지만 초깃값이 'null, undefined, []'등 불분명한 타입일 경우 '제네릭 타입'을 명시하는 것이 좋다
    = 'useState' 훅에 <string | null>, <number | null>과 같이 '유니언 타입'을 '제네릭'으로 명시하면 초깃값이 null이더라도 이후에 문자열이나 숫자를 문제없이 상태에 저장할 수 있다


    <2. 리액트 훅의 호출 위치>
    = 'useState'같은 리액트 훅은 반드시 함수형 컴포넌트 내부의 최상위에서 호출해야 한다
    = 여기서 '최상위'란 컴포넌트 함수 내부에서 조건문(if), 반복문(for), 함수 정의, 이벤트 핸들러 등 어떤 블록 안에도 포함되지 않은 영역을 뜻
    = 즉 컴포넌트가 실행될 때 항상 동일한 순서로 호출되는 위치여야 한다
        Tip) 
            - 리액트 공식 문서에서는 리액트 훅을 사용할 때 반드시 지켜야 하는 규칙들을 '훅의 규칙'으로 정의
            - 이 규칙은 'useState'뿐만 아니라 'useEffect', 'useContext' 등 모든 리액트 훅에 적용된다


    <3. 상태 변경 함수에서 값을 직접 전달할 때 주의할 점>
    = 상태 변경 함수를 사용하는 방식에는 '상태 값을 직접 전달'하는 방식과 '이전 상태 값을 참조'하는 방식이 있다
    = 이 중에서 값을 전달하는 방식을 사용할 때 주의해야 할 점
        ex) 직접전달 방식
            export default function UseStateHook3() {
            const [count, setCount] = useState(0);

            const clickHandler = () => {
                setCount(count + 1);
                setCount(count + 1);
                setCount(count + 1);
            }
            return (
                <>
                    <h1>Count : {count}</h1>
                    <button onClick={clickHandler}>click</button>
                </>
            )
        }
        - 코드에서 버튼을 클릭하면 'setCount()' 함수가 3번 호출한다
        - 많은 사람이 버튼을 한 번 클릭할 때마다 3씩 증가할 것이라고 예상하지만 실제로는 실행하면 count는 1씩 증가한다
        - 이러한 현상은 리액트의 상태 업데이트 방식 때문이다
        - 리액트는 여러 상태 변경을 즉시 처리하지 않고 비동기적으로 처리해 렌더링이 끝난 뒤 한 번에 모아서 적용
        - 이 방식을 '일괄 업데이트'라고 하며 불필요한 리렌더링을 줄여 성능을 최적화하는 방식 
        - 위 코드에서 'setCount(count + 1)'을 연속으로 3번 호출하더라도 세 번 모두 현재 count 값(0)을 기준으로 1을 더하는 연산이 수행
        - 즉 '0+1, 0+1, 0+1'이 반복되기 때문에 결과적으로 마지막 호출 결과인 1만 적용
        - 이는 리렌더링이 아직 발생하지 않은 상태에서 동일한 값을 기준으로 상태 변경을 요청했기 때문에 의도한 대로 동작하지 않는다
        - 이 문제는 '상태 변경 함수' 에 '콜백함수' 형태를 사용하면 해결


        ex) 콜백함수 전달 방식
            export default function UseStateHook3() {
            const [count, setCount] = useState(0);

            const clickHandler = () => {
                setCount((count) => count + 1);
                setCount((count) => count + 1);
                setCount((count) => count + 1);
            }
            return (
                <>
                    <h1>Count : {count}</h1>
                    <button onClick={clickHandler}>click</button>
                </>
            )
        }
        - '콜백 함수'는 항상 이전 상태 값을 매개변수로 전달받기 때문에 그 값을 기반으로 새로운 상태를 안전하게 계산할 수 있다
        - 이 방식은 'count'에 각각 이전 상태 값이 전달되므로 버튼을 클릭할 때마다 정상적으로 3씩 증가
        - 'setCount(count + 3)'처럼 한 번에 3을 더하는 방식도 가능하다
        - 하지만 이 방식도 여전히 기준이 되는 count 값이 최신 상태가 아닐 수 있으므로 상태 변경이 연속적으로 일어나는 경우에는 이전 상태 값을 기반으로 계산하는 '콜백 함수'형태가 더 안전하다
*/