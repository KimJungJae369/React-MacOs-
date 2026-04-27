import { useState } from 'react'

export default function Text() {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(show => !show)
    }

    return (
        <>
            <button onClick={handleClick}>
                {show ? "숨기기" : "보기"}
            </button>

            {show && <p>안녕하세요!</p>}
        </>
    )
}