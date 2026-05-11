// import {useState} from 'react'

// export default function Text() {
//   const [count, setCount] = useState(0);

//   const plusBtn = () => {
//     setCount(prev => prev < 10 ? prev + 1 : prev);
//   };

//   const minusBtn = () => {
//     setCount(prev => prev > -10 ? prev - 1 : prev);
//   };

//   const resetBtn = () => {
//     setCount(0);
//   }

//   const getMessage = () => {
//     if(count > 0){
//       return `현재 카운트는 ${count}입니다. 양수입니다.`
//     } else if(count < 0){
//       return `현재 카운트는 ${count}입니다. 음수입니다.`
//     } else {
//       return `현재 카운트는 ${count}입니다. 0입니다.`
//     }
//   }
//   return (
//     <div>
//       <h1>현재값 : {count}</h1>
//       <h2>{getMessage()}</h2>

//       <button onClick={plusBtn}>+</button>
//       <button onClick={minusBtn}>-</button>
//       <button onClick={resetBtn}>Reset</button>
//     </div>
//   )
// }


import {useState} from 'react'

export default function Text() {
  const [count, setCount] = useState(0);

  const plusBtn = () => {
    setCount(prev => prev < 10 ? prev + 1 : prev);
  }

  const minusBtn = () => {
    setCount(prev => prev > -10 ? prev - 1 : prev);
  }

  const resetBtn = () => {
    setCount(0);
  }

  const getMessage = () => {
    if(count > 0){
      return `현재 카운트는 ${count}입니다. 양수입니다.`
    }else if(count < 0){
      return `현재 카운트는 ${count}입니다. 음수입니다.`
    }else{
      return `현재 카운트는 ${count}입니다. 0입니다.`
    }
  }
  return (
    <>
      <h1>현재값 : {count}</h1>
      <h2>{getMessage()}</h2>
    
      <button onClick={plusBtn}>+</button>
      <button onClick={minusBtn}>-</button>
      <button onClick={resetBtn}>Reset</button>
    </>
  )
}
