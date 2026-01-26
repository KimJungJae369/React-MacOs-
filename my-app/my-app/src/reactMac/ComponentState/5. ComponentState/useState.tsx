import React from 'react'

export default function useState() {
  return (
    <div>useState</div>
  )
}

/*
    상태변경 함수
    = 'useState'로 선언한 상태 변수의 값을 변경할 때는 반드시 '상태 변경 함수'를 사용해야 한다
    = '상태 변경 함수'는 두 가지 방식으로 사용할 수 있다
        1) 상태 값을 직접 전달하는 방식
        = '상태 변경 함수'에 변경하려는 값을 직접 전달해 상태를 업데이트 : 상태_변경_함수(값);
            ex)
                const [count, setCount] = useState<number>(0); // 타입 추론으로 인해 <number> 생략 가능
                - 숫자 값 0을 초깃값으로 갖는 'count' 상태를 정의
                - count는 초깃값 0을 저장

                setCount(5); // const는 5로 변경
                - 값 변경 
                - 'setCount'에 새 값을 직접 전달한다

        2) 이전 상태 값을 참조하는 방식
        = '상태 변경 함수'에 '콜백함수'를 전달하면 업데이트 이전 상태 값이 함수의 매개 변수로 전달
            ex) count 상태 값을 1 증가시키고 싶을 때
            const [count, setCount] = useState<number>(0); // 초깃값 : 0
            const increment = () => {
                setCount((count) => count + 1); // 이전 상태 값을 참조하여 1 증가
            }
            - 이 방식은 이전 상태 값을 기반으로 새로운 값을 계산할 때 사용
            - 특히 상태 업데이트가 비동기적으로 처리될 수 있는 상황에서 정확한 상태 값을 반영하려면 이 방식이 안전하다
            - 상태 변수에 값을 직접 재할당하는 것만은 절대 피해야 한다

            Tip)
            - 여기서 말하는 '이전 상태 값'이란 상태 업데이트가 실행되고 바로 직전의 값을 의미
            - 문맥에 따라 '이전 상태값, 현재 상태값, 최신 상태값'이라고 부르기도 하지만 모두 같은 개념

*/