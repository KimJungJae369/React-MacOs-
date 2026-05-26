import React from 'react'
type UserProps = {
    children : React.ReactNode
    username : string,
    onDelete : (id : number) => void,
    id : number
}

export default function CommentCard({children, username, onDelete, id} : UserProps) {
    const handlerCardClick = () => {
        console.log('카드 클릭');
    }

    const handlerDeleteClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onDelete(id);
    }

    const handlerLinkClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        console.log('이동 막기');
    }
  return (
    <div className='card' onClick={handlerCardClick}>
        <h3>{username}</h3>

        <div className='content'>{children}</div>

        <button onClick={(e) => handlerDeleteClick(e)}>삭제</button>

        <a href="https://goole.com" onClick={(e) => handlerLinkClick(e)}>프로필 보기</a>
        {/* <a href="https://goole.com" >프로필 보기</a> */}
    </div>
  )
}


/*
    HTMLAnchorElement
    = <a> 태그(링크)를 가리키는 정식 이름
*/
