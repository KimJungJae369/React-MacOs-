// import React from 'react'
// import User from './User'

// export default function Children() {
//     return (
//         <>
//             <User title= 'User Component'>
//                 <p>Yumhui</p>
//                 <p>26</p>
//                 <p>C</p>
//             </User>
//         </>
//     )
// }

import React from 'react'
import User from './User'

export default function Children() {
    return (
        <>
            <User title="Children Component">
                <h2>안녕하세요</h2>
                <h3>잘부탁드립니다</h3>
                <h4>반갑습니다</h4>
            </User>
        </>
    )
}








/*
    Children
    = 부모 컴포넌트의 JSX 태그 사이에 포함된 모든 요소나 내용을 의미
    = 리액트에서 컴포넌트는 기본적으로 빈 태그 형태 '<컴포넌트 />'로 사용
    = 그런데 컴포넌트를 '시작 태그'와 '종료 태그'를 함께 사용하는 형태 '<컴포넌트>내용</컴포넌트>'로도 사용할 수 있다
    = 이러한 형태를 사용하면 컴포넌트 안에 포함된 내용을 특별한 'props'으로 취급한다 리액트에서는 이를 'children' 이라고 부른다
    = 리액트에서는 'Children'이 텍스트, JSX 요소, 숫자, 배열 등 다양한 형태가 될 수 있기 때문에 이를 유연하게 처리할 수 있는 'React.ReactNode' 타입으로 지정
    = 'Children'은 props 객체의 일부이므로 다른 속성과 함께 사용할 수 있다
    = 컴포넌트 태그 사이에 작성된 모든 내용을 하나로 묶어 전달하는 특별한 속성
    = 내용이 여러 요소로 구성되었어도 리액트는 이를 자동으로 하나의 'Children'으로 묶어서 전달
    = 따라서 한 컴포넌트에 'Children'을 2개 이상 따로 지정할 수 없다

    <React.ReactNode>
    = 모든 타입을 렌더링 할 수 있는 리액트의 타입
    = 리액트에서 렌더링할 수 있는 모든 유형의 값을 포괄하는 타입
    = 문자열, 숫자, JSX 요소, 배열, 프래그먼트, 포털, 불리언 값, null, undefined 등을 포함
    = 즉, 리액트 컴포넌트가 반환할 수 있는 모든 유형의 값을 나타내는 포괄적인 타입

    <props와 Children의 차이점>
    1. props
    = 컴포넌트에 전달되는 모든 속성을 의미
    = 데이터 값, 함수 등 특정 속성을 매개변수를 통해 전달

    2. Children
    = 컴포넌트 내부의 콘텐츠(내용)를 전달되는 값
    = 컴포넌트의 시작 태그와 종료 태그 사이에 포함된 모든 요소나 내용을 의미
    = 컴포넌트 내부에서 'props.children'을 통해 접근하여 렌더링

    3. 요약
    = 즉, props는 컴포넌트에 전달되는 속성 전체를 의미하고, Children은 그 속성 중에서 컴포넌트의 태그 사이에 포함된 내용을 특별히 지칭하는 개념이다


    ex)
        <User.tsx>
        export default function User({
            title,
            children
        }: {
            title: string,
            children: React.ReactNode
        }) {
            return (
                <>
                    <h1>{title}</h1>
                    {children}
                </>
            )
        }
        = 두 값을 모두 받을 수 있도록 props 타입 정의
        = User 컴포넌트는 'title'이라는 일반 문자열 속성과 <p> 요소 3개로 구성된 'Children'을 함께 전달받아 렌더링

    <ref와 key 속성은 props로 전달 불가능 -리액트 18기준- >
    = 리액트에서는 보통 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 'props'를 사용
    = 하지만 'ref'와 'key' 속성은 특별한 용도로 사용되기 때문에 일반적인 'props'로 전달되지 않는다
    = 두 속성은 자식 컴포넌트에서 'props.ref' 또는 'props.key'로 접근할 수 없다
    = 두 속성은 리액트가 내부적으로 따로 관리하고 props 객체에는 포함하지 않는다
    = 이는 'ref'와 'key'가 일반적인 데이터 전달용이 아니라 리액트 내부에서 특별한 용도로 사용하는 속성이기 때문이다
    = 하지만 '리액트19'부터는 'ref'와 'key'도 props로 전달 가능하도록 변경
    
        ref 
        = DOM 요소나 컴포넌트를 직접 참조할 때 사용
        = 'forwardRef'를 사용하면 자식 컴포넌트에서 별도의 매개변수로 받을 수 있다

        key
        = 리스트를 랜더링할 때 가상DOM에서 항목을 효율적으로 식별하고 업데이트하기 위해 사용
        = 자식 컴포넌트에서 고유 값으로 사용하고 싶다면 'id'와 같은 별도의 속성으로 전달
        
*/