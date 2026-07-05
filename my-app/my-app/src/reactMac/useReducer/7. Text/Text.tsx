import { useReducer } from 'react'

// type Action = {
//   type: string
// }

// function reducer(
//   state: number,
//   action: Action
// ) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1

//     case 'DECREMENT':
//       return state - 1

//     default:
//       return state
//   }
// }

// export default function Text() {
//   const [count, dispatch] =
//     useReducer(reducer, 0)

//   return (
//     <>
//       <h1>Count : {count}</h1>

//       <button
//         onClick={() =>
//           dispatch({ type: 'INCREMENT' })
//         }
//       >
//         INCREMENT
//       </button>

//       <button
//         onClick={() =>
//           dispatch({ type: 'DECREMENT' })
//         }
//       >
//         DECREMENT
//       </button>
//     </>
//   )
// }

type Action = {
  type : string
}

function reducer(state : number, action : Action){
  switch(action.type){
    case 'INCREMENT' : 
      return state + 1;

    case 'DECREMENT' : 
      return state - 1;

    case 'RESET' : 
      return 0;

    default : 
      return state;
  }
}

export default function Text() {
  const [count, dispatch] = useReducer(reducer,0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch({type : 'INCREMENT'})}>INCREMENT</button>
      <button onClick={() => dispatch({type : 'DECREMENT'})}>DECREMENT</button>
      <button onClick={() => dispatch({type : 'RESET'})}>RESET</button>
    </div>
  )
}



/*
    1. 버튼 만들기
    2. 버튼을 클릭하면 '사과, 바나나, 오렌지'를 1개씩 추가
    3. 아이템을 3개 추가하면 더 이상 추가할 수 없기
    4. 추가한 아이템은 배열로 관리하기
    5. 추가한 아이템을 <ul>, <li> 태그를 사용해 목록을 출력
    6. <li>태그의 구성은 추가한 아이템과 '삭제' 버튼
    7. '삭제'버튼을 클릭하면 아이템을 삭제
    8. 삭제한 아이템은 다시 추가할 수 있다
    9. 구현할 때 'useReducer' 훅을 사용

    find : 배열에서 조건에 맞는 첫 번째 요소를 반환하는 메서드
    includes : 배열이 특정 요소를 포함하는지 여부를 확인하는 메서드
    filter : 배열에서 조건에 맞는 모든 요소를 새로운 배열로 반환하는 메서드
*/