// // 장바구니 상태 리듀서
// export type CartItem = { id: number; name: string };
	// - CartItem : 장바구니 아이템의 타입을 정의하는 TypeScript 타입으로, id와 name 속성을 가진 객체를 나타낸다

// export function cartReducer(state: CartItem[], action: { type: string; payload?: any }) {  
	// - state : 현재 장바구니 상태 배열, action : 액션 객체로 type 속성과 선택적으로 payload 속성을 포함한다
	// - CartItem[] : CartItem 타입의 객체를 요소로 가지는 배열을 의미한다 / 빈 배열이지만 TypeScript에게 이 배열이 CartItem 타입의 객체를 요소로 가지는 배열임을
	//  알려주는 것이다
	// - payload?: any  : 액션 객체의 payload 속성은 선택적이며, 액션에 따라 필요한 경우에만 포함될 수 있다
	// - any : payload의 타입이 명확하지 않거나 다양한 형태의 데이터를 허용할 때 사용되는 타입이다
``
// 	switch (action.type) {
// 		case 'ADD_ITEM':
// 			return [...state, action.payload];
//             // [...state, action.payload] : 기존 상태 배열을 복사한 후 액션의 payload 객체를 추가하는 방식으로 장바구니 아이템을 업데이트한다
// 		default:
// 			return state;
// 	}

// }

export type CartItem = {id : number; name : string}

export function cartReducer(state : CartItem[], action : {type : string; payload ? : any}){
  switch(action.type){
    case "ADD_ITEM" : 
      return [...state, action.payload];
    default : 
      return state;
  }
}