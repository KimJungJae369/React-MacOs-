// // 사용자 상태 리듀서
// export const initialUser = { name: '' }; 
	// 초기 사용자 상태를 정의하는 객체로, name 속성이 빈 문자열로 초기화되어 있다

// export function userReducer(state: typeof initialUser, action: { type: string; payload?: any }) { 
	// state : 현재 사용자 상태 객체, action : 액션 객체로 type 속성과 선택적으로 payload 속성을 포함한다
	// payload?: any  : 액션 객체의 payload 속성은 선택적이며, 액션에 따라 필요한 경우에만 포함될 수 있다
	// any : payload의 타입이 명확하지 않거나 다양한 형태의 데이터를 허용할 때 사용되는 타입이다

// 	switch (action.type) {
// 		case 'SET_USER':
// 			return { ...state, ...action.payload };
//             // { ...state, ...action.payload } : 기존 상태 객체를 복사한 후 액션의 payload 객체로 덮어쓰는 방식으로 사용자 정보를 업데이트한다
//             // 예를 들어, 현재 상태가 { name: '홍길동' }이고 액션의 payload가 { name: 'Alice' }라면, 새로운 상태는 { name: 'Alice' }가 된다
// 		default:
// 			return state;
// 	}
// }
export const initialUser = { name: '' }

export function userReducer(state: typeof initialUser, action: { type: string; payload?: any }) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
