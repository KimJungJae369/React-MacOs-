import React from 'react';
import style from './CSSmodule.module.css';
import Children from './Children';

export default function CSSmodule() {
  return (
    <>
      <button className={style.btn}>Button</button>
      <Children />
    </>
  );
}


/*
  CSS 모듈
  = 파일 확장자가 'module.css'로 끝나는 파일에 스타일을 작성한 뒤 이름 컴포넌트에서 불러와 사용하는 방식
  = 'CSS 모듈'의 가장 큰 특징은 스타일이 '로컬 스코프(특정 공간 안에서만 사용할 수 있는 변수 범위)'를 가진다
  = 그래서 해당 CSS는 특정 컴포넌트에만 적용
  = 즉 컴포넌트마다 스타일을 독립적으로 관리할 수 없어 스타일 충돌을 방지할 수 있다
  = 또한 클래스 이름이 고유한 이름으로 자동 변환되기 때문에 다른 컴포넌트와 클래스 이름이 중복되는 문제도 예방할 수 있다
    ex)
        import React from 'react';
        import style from './CSSmodule.module.css';
        - CSS 파일 이름을 변경하고 'import style from' 구문을 사용

        import Children from './Children';

        export default function CSSmodule() {
          return (
            <>

              <button className={style.btn}>Button</button>
              - 버튼 요소에 'className={style.btn}'처럼 객체 속성 형태로 클래스 이름을 지정 => 클래스 이름 자동 변화
              <Children />
            </>
          );
        }

  = 'CSS 모듈'은 클래스 이름을 컴포넌트 기준으로 자동 변화해주기 때문에 다른 컴포넌트나 외부 CSS와 충돌 없이 안정적으로 스타일 적용할 수 있다

  Tip) CSS 모듈의 파일명은 컴포넌트 이름과 맞추는 것이 관례
*/
