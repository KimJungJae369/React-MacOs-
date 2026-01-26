import React from 'react'

export default function GenericType() {
    return (
        <></>
    )
}

/*
    제네릭 타입(Generic Type)
    = 타입스크립트에서 특정 타입에 고정되지 않고 다양한 타입에서 재사용할 수 있는 기능인 '제네릭'을 제공
    = '제네릭'을 사용하면 타입을 보다 유연하게 다룰 수 있으며 하나의 로직을 여러 타입에 적용할 수 있다
    = '제네릭'을 사용하지 않으면 같은 로직이라도 숫자와 문자열을 처리하는 함수를 따로 정의해야 한다 
    = 그럴 경우 코드에 중복이 생길 수 있고 유지 관리도 어려워질 수 있다
        ex)
            function indetituyNumber(vlaue : number){
                return value;
            } // 반환값 : number
            function indetituyString(vlaue : string){
                return value;
            } // 반환값 :  string

    <제네릭과 React.ReactNode 차이점>
    - 제네릭 -
    - 어떤 타입을 넣을건 정할 수 있다 / 타입 설정시 변경이 불가능

    - React.ReactNode -
    - 어떤 타입을 넣을건 정할 수 있다 / 타입 설정시 변경이 가능

    <T : 제네릭 타입 변수>
    = 제네릭을 사용하면 'T'라는 '제네릭 타입 변수'를 통해 어떤 타입이든 받을 수 있다
    = 'T'의 실제 타입은 함수를 호출할 때 자동으로 결정
    = 입력 값의 타입에 따라 반환 값의 타입도 함께 결정
    = indextity<number>(43) : T는 number가 되어 반환 값고 number 타입이 된다
    = indextity<string>('hello') : T는 string이 되어 반환 값고 string 타입이 된다
        ex)
            funrcion indntity<T>(value: T) : T{
                return value;
            } // 반환값 : T
    
    <제네릭과 useState 훅>
    = 제네릭을 사용하면 같은 함수 코드를 다양한 타입에 유연하게 재사용할 수 있다
    = 타입스크립트의 장점인 '타입 안정성'도 유지 
    = 'useState' 훅은 기본으로 타입 추론을 지원
    = 따라서 타입을 명시하지 않아도 타입스크립트가 초깃값을 기준으로 상태 값의 타입을 자동으로 추론
        ex)
            const [count, setCount] = useState(0); // count는 number 타입으로 추론
            const [text, setText] = useState('hello'); // text는 string 타입으로 추론


    = 그러나 경우에 따라 상태 값의 타입을 명확하게 지정하고자 할 때는 '제네릭'을 사용해 타입을 직접 지정할 수 있다
        ex)
            const [count, setCount] = useState<number>(0); // count는 number 타입
            const [text, setText] = useState<string>('hello'); // text는 string 타입


    1. const [value, setValue] = useState<number | undefined>()
    - 초기값이 없으면 value의 타입은 자동으로 undefined로 추론
    - 이처럼 초깃값이 없거나 동적으로 결정될 정확한 타입을 명시하지 않으면 연산 중 오류가 발생
    - 따라서 '제네릭'을 사용해 타입을 명확히 지정

    2. const [date, setDate] = useState<string | null>(null);
    - 초깃값은 null이지만 이후 문자열(string) 값을 상태로 저장한다면 제네릭을 사용해 상태의 전체 타입(string | null)을 지정

    Tip) 
    - '|'기호를 사용해 여러 타입을 나열하는 것을 '유니언 타입'이라고 한다
    - 유니언 타입은 타입스크립트 에서 여러 타입 중 하나의 값을 가질 수 있도록 허용하는 문법
    - 즉 'string | null'은 유니온 타입으로 값이 문자열(string) 또는 null일 수 있음을 의미

    <객체 형태의 상태를 다룰 때도 useState 훅에 제네릭을 사용해 타입을 지정>
    interface User{
        name : string;
        age : number;
    }
    const [user, setUser] = React.useState<User>({name : 'jeongjae', age : 28}); // {name : string, age : number}
*/
