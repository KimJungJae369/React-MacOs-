// 장바구니 상태 리듀서
export type CartItem = { id: number; name: string };
export function cartReducer(state: CartItem[], action: { type: string; payload?: any }) {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.payload];
            // [...state, action.payload] : 기존 상태 배열을 복사한 후 액션의 payload 객체를 추가하는 방식으로 장바구니 아이템을 업데이트한다
		default:
			return state;
	}
}
