// import React from 'react'
// import User from './User'

// export default function Component() {
//     const uerObj = {
//         name : '홍길동',
//         age : `20세`,
//     }

//     const clickHandler = () => {
//         console.log('clicked')
//     }
//     return (
//         <>
//             <User {...uerObj} clickHandler={clickHandler} />
//         </>
//     )
// }

import React from 'react'
import User from './User'

export default function Component() {
    const UserObj = {
        name : '홍길동',
        age : 20,
        body : '나는 홍길동이다',
    }

    const hnadlerClick = () => {
        console.log('클릭이 되었습니다')
    }
    return (
        <>
            <User {...UserObj} Handler={hnadlerClick}/>
        </>
    )
}












/*
    props와 전개 연산자(Deploying Operator : 디폴로이먼트 아퍼레이터)
    = 여기서 'uerObj' 객체를 props로 전달할 때 'uerObj' 전체를 하나의 속성으로 설정해 전달
    = 따라서 'User' 컴포넌트에서 'props.uerObj'로 객체 전체에 접근할 수 있다
    = 만약 'uerObj' 객체의 속성을 각각 전달하고 싶다면 '전개연산자(...)'를 사용
        전개 연산자 : 객체의 속성을 개별적인 속성으로 분해하여 전달 / 객체의 속성을 풀어 해당 위치에 하나하나 나열해주는 역할

    <User UserObj={UserObj} clickHandler={clickHandler}/> --> <User {...UserObj} clickHandler={clickHandler}/>
    = 이와 같이 작성하면 props에 name,age,clickHandler라는 3개 속성이 개별로 전달되는 효과
    = 따라서 'User' 컴포넌트에서는 'props.name', 'props.age', 'props.clickHandler'로 각각 접근할 수 있다
    = 자식 컴포넌트에서는 'UserObj' 객체의 속성들이 분리되어 전달되므로 더 이상은 'props.UserObj'로 접근할 수 없다
    = '전개 연산자(...)'를 사용하여 객체의 속성을 개별적인 속성으로 분해하여 전달하는 방법은 매우 유용하다
    = 특히 많은 속성을 가진 객체를 props로 전달할 때 코드가 간결해지고 가독성이 향상된다
    = 코드가 간결해지고 필요한 속성만 선택적으로 전달할 수 있다
*/