import React from 'react'

export default function StateVariable() {
    return (
        <div>StateVariable</div>
    )
}
/*
    상태변수(StateVariable)
    = 리액트에서 컴포넌트의 상태를 관리하기 위해 사용하는 특별한 변수
    = 'useState' 훅을 사용해 선언하면 'let, const'로 선언한 변수와 달리 리액트 내부에서 값의 변경을 감지
    = 따라서 상태 변수의 값이 변경되면 해당 컴포넌트는 자동으로 리렌더링되어 UI가 업데이트
    = 'useState' 훅의 매개변수로 전달한 값은 상태 변수의 초깃값
    = 이때 상태 변수에 저장된 값을 '상태 값'
    = 'state'는 상태를 저장하는 변수
    = '상태 값'은 '상태 변수'가 현재 가지고 있는 값
        ex) const [state, setState] = useState(10); // 초깃값 : 10, 상태 변수 : state , 상태 값 : 10

    = 변수에 값을 직접 재할당하면 안된다
        ex) const [state, setState] = useState(10);
            state = 20; // ❌ 이렇게 하면 안됨
            setState(20); // ✅ 이렇게 해야함
    = 이렇게(state = 20) 작성하면 오류가 발생한 뿐 아니라 리액트가 변경 사항을 감지하지 못해 화면에 반영되지 않는다
*/