// import {useReducer} from 'react'

// const availableItems = ['사과', '바나나', '오렌지'] as const // 추가 가능한 기본 아이템 목록이다.

// type State = { // 상태 객체의 타입이다.
//     items: string[] // 현재 추가된 아이템들의 목록을 담는 배열이다.
// }

// type ReducerAction = // 상태 변경을 지시하는 액션 객체의 타입이다.
//     | {type: 'ADD_ITEM'} // 다음 추가 가능한 아이템을 목록에 넣는다.
//     | {type: 'REMOVE_ITEM'; index: number} // 전달받은 위치의 아이템을 삭제한다.

// function reducer(state: State, action: ReducerAction): State { // 상태 변경 규칙을 한곳에서 처리한다.
//     switch (action.type) {
//         case 'ADD_ITEM': { // 아이템 추가 액션이 들어오면 다음과 같이 처리한다.
//             const newItem = availableItems.find((item) => !state.items.includes(item)) // 아직 추가되지 않은 아이템 하나를 찾는다.

//             if (!newItem) { // 추가할 아이템이 더 이상 없으면 상태를 변경하지 않고 그대로 반환한다.
//                 return state // 더 추가할 아이템이 없으면 기존 상태를 유지한다.
//             }

//             return {
//                 ...state, // 기존 상태 값은 유지한다.
//                 items: [...state.items, newItem], // 새 아이템을 배열 끝에 추가한다.
//             }
//         }

//         case 'REMOVE_ITEM':  // 아이템 제거 액션이 들어오면 다음과 같이 처리한다.
//             return {
//                 ...state, // 기존 상태 구조는 그대로 둔다.
//                 items: state.items.filter((_, index) => index !== action.index), // 선택한 위치의 아이템만 제외한다.
//             }

//         default:
//             return state // 정의되지 않은 액션이면 상태를 변경하지 않는다.
//     }
// }

// export default function Text() {
//     const [state, dispatch] = useReducer(reducer, {items: []}) // 초기 상태와 reducer를 연결한다.

//     return (
//         <>
//             <button
//                 type="button" // 폼 제출이 아닌 일반 버튼으로 동작한다.
//                 onClick={() => dispatch({type: 'ADD_ITEM'})} // 클릭 시 추가 액션을 보낸다.
//                 disabled={state.items.length >= availableItems.length} // 3개가 모두 추가되면 버튼을 막는다.
//                 // disabled : 버튼을 비활성화하는 속성으로, 현재 추가된 아이템 수가 가능한 아이템 수보다 많거나 같으면 클릭할 수 없게 한다.
//             >
//                 아이템 추가 {/* 새로운 아이템을 순서대로 추가한다. */}
//             </button>

//             <ul> {/* 추가된 아이템 목록을 보여준다. */}
//                 {state.items.map((item, index) => (
//                     <li key={`${item}-${index}`}> {/* 목록 렌더링을 위한 고유 key를 준다. */}
//                         {item} {/* 현재 추가된 아이템 이름을 출력한다. */}
//                         <button
//                             type="button" // 각 항목 옆의 삭제 버튼이다.
//                             onClick={() => dispatch({type: 'REMOVE_ITEM', index})} // 클릭한 항목의 위치를 기준으로 삭제한다.
//                         >
//                             삭제 {/* 선택한 아이템을 목록에서 제거한다. */}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }



// find : 배열에서 조건에 맞는 첫 번째 요소를 반환하는 메서드
// includes : 배열이 특정 요소를 포함하는지 여부를 확인하는 메서드
// filter : 배열에서 조건에 맞는 모든 요소를 새로운 배열로 반환하는 메서드

import {useReducer} from 'react'

const avaiableItems = ['사과', '바나나', '오렌지'] as const;

type State = {
    items : string[];
}

type ReducerAction = 
    | {type : 'ADD_ITEM'}
    | {type : 'REMOVE_ITEM'; index : number}

function reducer(state : State, action : ReducerAction) : State {
    switch(action.type){
        case 'ADD_ITEM' : 
            const newItem = avaiableItems.find((item) => !state.items.includes(item));

            if(!newItem){
                return state;
            }

            return{...state, items: [...state.items, newItem]}

        case 'REMOVE_ITEM' : 
            return{...state, items: state.items.filter((_, index) => index !== action.index)}

        default : 
            return state
    }
}

export default function Text() {
    const [state, dispatch] = useReducer(reducer,{items : []});
  return (
    <div>
        <button
            type='button'
            onClick={() => dispatch({type : 'ADD_ITEM'})}
            disabled={state.items.length >= avaiableItems.length}
        >아이템 추가</button>

        <ul>
            {state.items.map((item,index) => (
                <li key={`${index} - ${item}`}>
                    {item}
                    <button onClick={() => dispatch({type : 'REMOVE_ITEM', index})}>삭제</button>
                </li>
            
            ))}
        </ul>
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
*/