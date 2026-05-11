import {useState} from 'react'
import Count from './Count'

// export default function UseReduceHook() {
//   const [count, setCount] = useState(0)
//   const increment = () => setCount((count) => count + 1)
//   return (
//     <>
//       <Count count={count} increment={increment} />
//     </>
//   )
// }

import React from 'react'

export default function UseReducerHook() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);`` 
  return (
    <div>
        <Count count={count} increment={increment} />
    </div>
  )
}


/*
  개발자 도구로 상태 값 확인하기
  = '리액트 개발자 도구'를 활용하면 상태 값을 화면에 출력하지 않고도 상태 변화를 확인할 수 있다
  = '리액트 개발자 도구'가 설치 되어 있다면 개발자 도구 아이콘이 빨간색으로 활성화
  = 리액트 개발자 도구는 아이콘 색상을 '개발 모드에서 빨간색', '배포 모드에서 검은색 + 파란색'으로 표시
  = 개발자 도구의 상단 탭에 기존 항목외에 'Components'와 'Profiler' 탭이 추가
  = 'Components' 탭에서는 컴포넌트 트리를 탐색하면서 각 컴포넌트의 상태와 props를 확인할 수 있다
  = 'Profiler' 탭에서는 컴포넌트의 렌더링 성능을 분석할 수 있다
  = 부모 컴포넌트에서 전달한 props 값도 확인할 수 있다
  = 'Highlight updates when components render' 옵션을 체크하면 컴포넌트가 렌더링될 때마다 화면에서 해당 영역이 하이라이트된다
  = 이 기능은 불필요한 렌덩링이 발생하는 컴포넌트를 찾는 데 매우 유용
  = 상태 변화, props 전달, 컴포넌트 구조 확인, 렌더링 흐름 추적 등에 매우 효과적인 도구 
  = 이를 적극적으로 활용한다면 디버깅은 물론 성능 최적화에도 큰 도움이 될 것이다
*/