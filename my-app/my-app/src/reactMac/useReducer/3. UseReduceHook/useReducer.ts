// // 사용자 상태 리듀서
// export const initialUser = { name: '' };
// export function userReducer(state: typeof initialUser, action: { type: string; payload?: any }) {
// 	switch (action.type) {
// 		case 'SET_USER':
// 			return { ...state, ...action.payload };
//             // { ...state, ...action.payload } : 기존 상태 객체를 복사한 후 액션의 payload 객체로 덮어쓰는 방식으로 사용자 정보를 업데이트한다
//             // 예를 들어, 현재 상태가 { name: '홍길동' }이고 액션의 payload가 { name: 'Alice' }라면, 새로운 상태는 { name: 'Alice' }가 된다
// 		default:
// 			return state;
// 	}
// }

export const initialUser = {name : ''}
export function userReducer(state : typeof initialUser, action : {type : string, payload : any}){
	switch(action.type){
		case 'SET_USER' :
			return {...state, ...action.payload};
		default : 
			return state;
	}
}