// // 장바구니에 들어갈 상품 하나의 형태를 정의
// // 예: { id: 1, name: 'Item 1' }
// export type CartItem = { id: number; name: string }

// // cartReducer는 현재 장바구니 상태(state)와 액션(action)을 받아서
// // 다음 상태를 계산해주는 함수
// export function cartReducer(
//   state: CartItem[],
//   action: { type: string; payload?: CartItem }
// ) {
//   // action.type 에 따라 어떤 동작을 할지 분기
//   switch (action.type) {
//     case 'ADD_ITEM':
//       // 상품 추가 액션인데 payload가 없으면 상태를 그대로 반환
//       if (!action.payload) return state

//       // 기존 장바구니 배열을 복사해서 뒤에 새 상품을 추가
//       // [...state, action.payload]
//       // => 기존 배열 + 새 상품 객체
//       return [...state, action.payload]

//     default:
//       // 처리하지 않는 액션이면 현재 상태 그대로 반환
//       return state
//   }
// }

export type CartItem = {id : number, name : string}
export function cartReducer(state : CartItem[], action : {type : string, payload? : any}){
  switch(action.type){
    case 'ADD_ITEM' : 
      if(!action.payload) return state
      return [...state, action.payload]
    
    default : 
      return state;
  }
}