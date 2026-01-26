// import React from 'react'
// import User from './User.jsx'

// export default function Component8() {
//     const UserObj= {
//         name : '홍길동',
//         age : `28세`,
//     }

//     const clickHandler = () =>{
//         console.log('클릭')
//     }
//     return <User UserObj={UserObj} clickHandler={clickHandler}/>
// }




import React from 'react'
import User from './User.jsx'

export default function Component8() {
    const UserProps = {
        name : '홍길동',
        age : 32,
        body : '180cm',
    }
    
    const handlerCLick = () => {
        console.log('click')
    }
    return (
        <>
            <User Obj={UserProps} Habdler={handlerCLick}/>
        </>
    )
}






/*
    props 객체 타입 알아내기
    = 리액트에서는 컴포넌트로 전달할 데이터 개수에 제한이 없다
    = 각 데이터를 개별 props로 지정할 수도 있지만 전달할 데이터가 많아질수록 props를 하나하나 지정하면 코드가 길어지고 복잡해질 수 있다
    = 이럴 땐 전달할 데이터를 하나의 객체나 배열로 묶어 한 번에 전달하는 것이 더 깔끔하고 효율적이다
    ex)
        1. const UserObj= {
            name : '홍길동',
            age : `28세`,
        }
        - 'name'과 'age' 값을 담은 객체 'UserObj'를 정의

        2. return <User User={UserObj}/>
        - 'UserObj' 객체를 'User'라는 속성으로 'User 컴포넌트(자식 컴포넌트)'에 전달한다
    
    = 객체 하나를 props로 전달하면 필요한 데이터를 그 안에서 꺼내 사용할 수 있다
    = 이벤트 핸들러 함수도 props를 통해 자식 컴포넌트에 전달할 수 있다
    = 예를 들어 버튼을 클릭했을 때 어떤 동작을 실행하고 싶다면 부모 컴포넌트에서 클릭 이벤트 핸들러 함수를 정의하고 자식 컴포넌트에 전달한다
    ex)
        <부모컴포넌트>
        export default function 컴포넌트_이름() {
        1. const clickHandler = () =>{
            console.log('클릭')
        }
        -  'clickHandler()'는 버튼 클릭 시 실행되는 함수 
        - 실행되면 콘솔에 '클릭'이라는 메시지를 'console'에 출력

        2. return <User UserObj={UserObj} Handler={clickHandler}/>
        - 'clickHandler()'함수를 'Handler()'라는 속성으로 User 컴포넌트(자식 컴포넌트)에 전달
        }

    <오류 메세지가 제대로 작동하는 2가지 방법>
    1. 자식 컴포넌트 파일이 존재해야 한다
    = 컴포넌트 코드가 아예 없으면 VSCode는 props에 대해 검사하지 않는다
    = 따라서 최소한 다음 처럼 비어 있는 컴포넌트라도 정의 해야한다
    export default function User() {
        return <></>
    }

    2. props 매개변수가 없는 상태여야 한다
    = VSCode는 props 매개변수가 이미 선언되어 있으면 오류 메세지를 표시하지 않는다
    = 오류 메세지로부터 정확한 props 타입을 추론하려면 props매개변수를 제거한 상태여야 한다
*/