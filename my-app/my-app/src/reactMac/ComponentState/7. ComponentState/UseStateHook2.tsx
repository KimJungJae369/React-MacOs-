import React from 'react'
import { useState } from 'react'

export default function UseStateHook2() {
    // 여러 개의 상태 변수를 각각 정의
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);

    // 여러 상태 변수를 하나의 객체로 묶어 정의
    const [formState, setFormState] = useState({
        name : '홍길동',
        age : 31,
        gender : '남자'
    });
 
    return (
        <div>UseStateHook2</div>
    )
}

/*
    useState 훅 여러 번 사용하기
    = 'useState' 훅은 한 번에 하나의 상태 값만 관리할 수 있다
    = 따라서 컴포넌트 내부에서 여러 개의 상태 값이 필요하다면 'useState'를 여러 번 호출해 각 상태를 따로 정의해야 한다
    = 상태 변수의 이름(식별자)이 중복되지 않도록 주의
        ex)
            const [name, setName] = useState(null);
            const [age, setAge] = useState(null);
            const [gender, setGender] = useState(null);
            - 이 방식은 각 상태를 독립적으로 업데이트할 수 있다는 장점
            - 하지만 상태 개수가 많아지면 'useState' 훅도 많아지고 상태 변경 함수도 늘어나면 코드가 복잡해지는 단점
            - 이런 경우 여러 상태 값을 하나의 객체로 묶어 관리하는 방법을 사용할 수 있다

        ex) 
            const [formState, setFormState] = useState({
                name : '홍길동',
                age : 31,
                gender : '남자'
            });
            - 이 방식은 'useState' 훅을 한 번만 사용해도 여러 값을 한꺼번에 다룰 수 있어 코드가 더 간결
            - 하지만 객체 안 특정 속성만 변경하려면 '전개 연산자(...)'를 사용해 기존 갹체를 복사한 후 일부 속성만 바꿔야 한다
 
    
*/
