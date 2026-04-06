  
import { useReducer } from "react";
import counterReducer from "./counterReducer.ts";
import { userReducer, initialUser } from './useReducer.ts';
import { cartReducer, CartItem } from './cartReducer .ts';

// export default function      UseReducerHook() {
//     // 카운터 상태 관리
//     const [count, countDispatch] = useReducer(counterReducer, 0);

//     // 사용자 상태 관리
//     const [user, userDispatch] = useReducer(userReducer, initialUser);

//     // 장바구니 상태 관리
//     const [cart, cartDispatch] = useReducer(cartReducer, [] as CartItem[]); 
//     return (
//         <>
//             <h1>Count : {count}</h1>
//             <button onClick={() => countDispatch({ type: "INCREMENT" })}>Increment</button>

//             <br />

//             <h2>User : {user.name}</h2>
//             <button onClick={() => userDispatch({type : 'SET_USER', payload : {name : 'Alice'}})}>Set User</button>

//             <br />

//             <h3>Cart Items : {cart.length}</h3>
//             <button onClick={() => cartDispatch({type : 'ADD_ITEM', payload : {id : 1, name : 'Item 1'}})}>Add Item</button>
//         </>
//     )
// }

import React from 'react'

export default function UseReducerHook() {
    const [count, countDispatch] = useReducer(counterReducer, 0);
    const [user, userDispatch] = useReducer(userReducer, initialUser);
    const [cart, cartDispatch] = useReducer(cartReducer, [] as CartItem[]);
  return (
    <>
        <h1>Count : {count}</h1>
        <button onClick={() => countDispatch({type : "INCREMENT"})}>Increment</button>
        <button onClick={() => countDispatch({type : "DECREMENT"})}>Decrement</button>
        <button onClick={() => countDispatch({type : "RESET"})}>Reset</button>

        <h1>User : {user.name}</h1>
        <button onClick={() => userDispatch({type : 'SET_USER', payload : {name : 'Alice'}})}>Set User</button>

        <h1>Cart Items : {cart.length}</h1>
        <button onClick={() => cartDispatch({type : "ADD_ITEM", payload : {id : 1, name : 'Item 1'}})}>Add Item</button>
    </>
  )
}




/*
    UseReducer 훅 여러 번 사용하기
    = 컴포넌트에서 여러 상태를 관리해야 할 때 'UseReducer' 훅을 여러 번 사용하면 각 상태를 독립적으로 관리할 수 있다
    = 이러한 경우 상태별로 리듀서 함수를 각각 정의하며 각 상태 변수 액션이 발생하는 함수 리듀서 함수의 이름은 중복되지 않아야 한다

    export default function UseReducerHook() {
    // 카운터 상태 관리
    const [count, countDispatch] = useReducer(counterReducer, 0);
    - 'counterReducer()' 함수를 사용해 숫자 상태를 관리한다
    - 버튼 클릭시 'INCREMENT' 액션이 발생하며 숫자가 1씩 증가

    // 사용자 상태 관리
    const [user, userDispatch] = useReducer(userReducer, {});
    - 'userReducer()' 함수를 사용해 사용자 정보를 관리한다
    - 'SET_USER' 액션이 발생하면 'user.name' 값을 'Alice'로 업데이트

    // 장바구니 상태 관리
    const [cart, cartDispatch] = useReducer(cartReducer, []);
    - 'cartReducer()' 함수를 사용해 장바구니 아이템 배열을 관리한다
    - 'ADD_ITEM' 액션이 발생하면 {id : 1, name : 'Item 1'} 아이템이 배열에 추가된다
    - 'as CartItem[]' : TypeScript에서 빈 배열을 CartItem 타입의 배열로 명시적으로 지정하는 방식이다
        as : 타입 단언 연산자로, TypeScript에게 해당 값이 특정 타입임을 알려주는 역할을 한다
        CartItem[] : CartItem 타입의 객체를 요소로 가지는 배열을 의미한다
    - 따라서 [] as CartItem[]는 빈 배열이지만, TypeScript에게 이 배열이 CartItem 타입의 객체를 요소로 가지는 배열임을 알려주는 것이다 

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => countDispatch({ type: "INCREMENT" })}>Increment</button>

            <br />

            <h2>User : {user.name}</h2>
            <button onClick={() => userDispatch({type : 'SET_USER', payload : {name : 'Alice'}})}>Set User</button>

            <br />

            <h3>Cart Items : {cart.length}</h3>
            <button onClick={() => cartDispatch({type : 'ADD_ITEM', payload : {id : 1, name : 'Item 1'}})}>Add Item</button>
        </>
    )
}
*/




