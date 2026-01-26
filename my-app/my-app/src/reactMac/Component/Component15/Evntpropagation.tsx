// 1. 캡처링
// export default function Evntpropagation() {
//     const handlerCaptrue = () => {
//         console.log('Parent');
//     }

//     const handlerBubble = () => {
//         console.log('Child');
//     }
//     return (
//         <>
//             <div 
//                 onClickCapture={handlerCaptrue} // onClickCapture사용
//                 style={{padding : 50, backgroundColor : '#0f0f0f'}}
//             >Parent
//                 <button onClick={handlerBubble} style={{marginLeft : 20,}}>Click Me</button>
//             </div>
//         </>
//     )
// }


// import React from 'react'

// export default function Evntpropagation() {
//     const handllerCaptrue = () => {
//         console.log('부모')
//     }

//     const handlerBubble = () => {
//         console.log('자식')
//     }
//   return (
//     <div onClickCapture={handllerCaptrue}>Evntpropagation <button onClick={handlerBubble}>click</button></div>
//   )
// }
























// 2. 버블링
// import React from 'react'

// export default function Evntpropagation() {
//     const handlerCaptrue = () => {
//         console.log('Parent');
//     }

//     const habdlerBulble = () => {
//         console.log('Child');
//     }
//     return (
//         <>
//             <div
//                 onClick={handlerCaptrue}
//                 style={{padding : 50, backgroundColor : '#f0f0f0', color : '#000'}}
//             >Parent
//                 <button onClick={habdlerBulble} style={{marginLeft : 20,}}>Click Me</button>
//             </div>
//         </>
//     )
// }

// import React from 'react'

// export default function Evntpropagation() {
//     const handllerCaptrue = () => {
//         console.log('부모')
//     }

//     const handlerBubble = () => {
//         console.log('자식')
//     }
//   return (
//     <div onClick={handllerCaptrue}>Evntpropagation <button onClick={handlerBubble}>click</button></div>
//   )
// }

























// 3.상위 요소 전파 막기
// export default function Evntpropagation() {
//     const handlerCaptrue = () => {
//         console.log('Parent');
//     }

//     const habdlerBulble = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         e.stopPropagation();
//         console.log('Child');
//     }
    
//     return (
//         <>
//                 <div
//                     onClick={handlerCaptrue}
//                     style={{padding : 50, backgroundColor : '#f0f0f0', color : '#000'}}
//                 >Parent
//                     <button onClick={habdlerBulble} style={{marginLeft : 20,}}>Click Me</button>
//                 </div>
//         </>
//     )
// }


// import React from 'react'

// export default function Evntpropagation() {
//     const handlerCaptrue = () => {
//         console.log('부모')
//     }

//     const handlerBubble = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         e.stopPropagation();
//         console.log('자식')
//     } 
//   return (
//     <div onClick={handlerCaptrue}>Evntpropagation <button onClick={handlerBubble}>onClick</button></div>
//   )
// }





























// 4, 이벤트 기본 동작 막기
// import React from 'react'

// export default function Evntpropagation() {
//     return (
//         <>
//             <form 
//                 onSubmit={(e) => {
//                     e.preventDefault();
//                 }}
//             >
//                 <input type="text" name='email'/>
//                 <input type="password" />
//                 <button type='submit'>전송</button>
//             </form>
//         </>
//     )
// }


import React from 'react'

export default function Evntpropagation() {
  return (
    <>
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" />
            <input type="password" />
            <button type="submit">전송</button>
        </form>
    </>
  )
}





/*
    이벤트 전파(Evntpropagation)
    = 이벤트가 발생했을 때 부모 또는 자식 요소로 전달되는 현상

    1. 캡처링
    = 이벤트가 '부모 요소'에서 '자식 요소'로 내려가는 방식
    = 리액트에서 캡처링을 처리하려면 이벤트 속성에 'Capture'를 붙여 사용    
        ex)
            export default function Evntpropagation() {
            const handlerCaptrue = () => {
                console.log('Parent');
            }

            const handlerBubble = () => {
                console.log('Child');
            }
            return (
                <>
                    <div 
                        onClickCapture={handlerCaptrue} // 'onClickCapture'사용
                        style={{padding : 50, backgroundColor : '#0f0f0f'}}
                    >Parent
                        <button onClick={handlerBubble} style={{marginLeft : 20,}}>Click Me</button>
                    </div> // Parent, Child
                </>
            )
        }
            - 코드에서 '<button>' 요소를 클릭하면 'onClick' 이벤트가 발생
            - 이때 '부모 요소'인 '<div>에 'onClickCapture' 속성이 저장되어 이벤트가 자식 요소로 도달하기 전에 부모의 캡처링 핸들러가 먼저 실행
            - 이벤트는 부모 -> 자식
            - 웹 브라우저 콘솔창을 보면 'Parent' -> 'Child' 순서로 출력됨

        2. 버블링
        = 이벤트가 '자식 요소'에서 '부모 요소'로 전파되는 방식
        = 예를 들어 '<button>' 요소에서 발생한 클릭 이벤트는 해당 버튼을 포함한 '<div>, <body>, <html>' 요소로 차례대로 전달
        = 리액트에서는 '버블링이 기본 동작이므로 '캡처링' 처럼 'Captrue' 수식어가 붙은 별도의 이벤트를 속성이 필요하지 않는다
        = 이벤트 속성 이름을 그대로 사용하면 된다
            ex)
                export default function Evntpropagation() {
                    const handlerCaptrue = () => {
                        console.log('Parent');
                    }

                    const habdlerBulble = () => {
                        console.log('Child');
                    }
                    return (
                        <>
                            <div
                                onClick={handlerCaptrue}
                                style={{padding : 50, backgroundColor : '#f0f0f0', color : '#000'}}
                            >Parent
                                <button onClick={habdlerBulble} style={{marginLeft : 20,}}>Click Me</button>
                            </div> // Child, Parent
                        </>
                    )
                }
                - Child -> Parent순으로 로그가 출력

        3. 이벤트 전파 막기
        = '캡처링'이 일어나지 않게 하려면 이벤트 속성에 'Captrue' 수식어를 사용하지 않으면 된다
        = '버블링'은 기본 동작이므로 '버블링'을 막으려면 명시적으로 코드를 작성해야 한다
        = 이 메서드는 이벤트가 상위 요소로 전파되는 것을 막아준다
        = 자식 요소에게서 작성을 해주면 된다
        = e.stopPropagation(스탑 프로퍼게이션 : 전달을 멈추다)
            stopPropagation() : 상위전달 이벤트를 막는 것
            ex)
                export default function Evntpropagation() {
                    const handlerCaptrue = () => {
                        console.log('Parent');
                    }

                    const habdlerBulble = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.stopPropagation();
                        console.log('Child');
                    }
                    
                    return (
                        <>
                                <div
                                    onClick={handlerCaptrue}
                                    style={{padding : 50, backgroundColor : '#f0f0f0', color : '#000'}}
                                >Parent
                                    <button onClick={habdlerBulble} style={{marginLeft : 20,}}>Click Me</button>
                                </div>
                        </> // Child
                    )
                }
                - 애플리케이션을 실행하고 버튼을 클릭하면 콘솔에 'Child'만 출력되고 'Parent'는 출력되지 않는다
                - 이는 이벤트가 발생할 때 이벤트 객체의 'stopPropagation()' 메서드가 호출되어 이벤트가 부모로 전달되지 않았기 때문에 

        4. 이벤트 기본 동작 막기
        = HTML 요소는 특정 이벤트가 발생하면 자동으로 실행하는 기본 동작이 있다
        = 'JSX 요소'도 'HTML' 태그와 동일하게 이러한 기본동작을 따른다
        = 예를 들어 <a> 태그는 클릭하면 링크로 이동하고 <button> 태그는 클릭하면 이벤트를 발생, <form> 태그는 입력한 데이터를 서버에 제출하면서 페이지를 새로 고침한다
        = 하지만 리액트에서 이런 동작을 막아야할 상황이 자주 발생
        = "REST API(링크로 통신)"를 통해 데이터를 비동기 방식으로 전송하는 경우 <from>의 기본동작(페이지 새로 고침)이 실행되면 리액트 애플리케이션의 상태와 UI가 초기화되어 사용자가 입력한 데이터가 모두 사라질수 있다
        = 기본 동작을 막으려면 이벤트 객체의 'preventDefault()' 메서드를 호출하면 된다
            preventDefault(프리벤트 디폴트 : 기본값을 막다) : 브라우저의 기본 동작을 막는다 / a, form. input태그 등을 이벤트를 막는 것/ 클릭 이벤트는 가능하지만 페이지이동, 새로고침 등은 일어나지 않는다 / 이벤트를 막는것이 있고 안막는 이벤트가 있다
        = 이 메서드는 웹 브라우저의 기본 동작을 취소한다
            ex)
                export default function Evntpropagation() {
                    return (
                        <>
                            <form 
                                - <form> 요소는 사용자가 입력한 데이터를 서버로 제출하는 기능, 전송 후 자동으로 페이지를 새로 고침 

                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                                - 'onSubmit'은 폼이 제출될 때 자동으로 실행하는 이벤트 핸들러 
                                - 이벤트 핸들러에서 'e.preventDefault()'를 호출하여 폼의 기본 동작인 페이지 새로 고침을 막음
                                - 단 'e.preventDefault()'는 폼 제출 시 기본 동작을 취소할 뿐 버튼을 클릭하는 동작 자체는 막지 않는다
                            >
                                <input type="text" name='email'/>
                                <input type="password" />

                                <button type='submit'>전송</button>
                                - 클릭하면 '<from>'이 제출되는 'submit' 버튼 이벤트 발생
                            </form>
                        </>
                    )
                }

*/