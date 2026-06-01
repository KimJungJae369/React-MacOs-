// 글로벌 스타일
// import './classsname.css'; 
// import classNames from 'classnames';
// import Children from './Children';

// export default function Classnames() {
//   const isAction = true;
  
//   return (
//     <div>
//       <button className={classNames('btn', { 'is-active': isAction })}>
//         App Button
//       </button>

//       <Children />
//     </div>
//   );
// }

// CSS 모듈
import styles from './style.module.css';
import classNames from 'classnames/bind';
import Children from './Children';

export default function Classnames() {
  const isActive = true;

  const cx = classNames.bind(styles);
  return (
    <div>
      <button className={cx({btn : true, 'is-active': isActive })}>
        App Button
      </button>
      <Children />
    </div>
  ); 
}

/*
    Classnames 라이브 러리
    = 'Classnames'는 리액트를 포함한 자바스크립트 프레임워크에서 CSS 클래스 이름을 동적으로 조합하고 관리할 수 있게 도와주는 라이브러리
    = 이 라이브러리를 사용하면 조건에 따라 클래스 이름을 동적으로 추가하거나 제거할 수 있어 스타일을 더욱 유연하고 깔끔하게 적용할 수 있다
    = 'classsname()' 함수는 전달된 클래스 이름을 공백으로 구분한 하나의 문자열로 합쳐준다
    = 불필요한 공백을 줄이고 조건에 따라 클레스를 조합할 수 있어 코드가 훨씬 간결하다
    = 'classsname' 라이브러리는 '글로버 스타일 방식'과 'CSS 모듈 방식' 모두에서 사용할 수 있지만 사용법에 차이가 있다

    1. 글로벌 스타일에서 사용
    = 'classsname' 라이브러리는 글로버 스타일 방식에서 매우 유용하게 활용
      ex)
        import './classsname.css'; 
        import classNames from 'classnames';
        - 'classNames' 패키지에서 classNames 함수를 import한다

        import Children from './Children';

        export default function Classnames() {
          const isAction = true;
          - 'isAction'변수에 true 또는 false 값을 가지며 값에 따라 'button' 요소에 'is-action' 클래스를 추가하거나 삭제한다

          return (
            <div>
              <button className={classNames('btn', { 'is-active': isAction })}>
              - btn 클래스는 항상 적용되고 'isAction'가 true일 때만 'is-action' 클래스가 함께 추가된다 이 경우 'button' 요소의 클래스는 btn is-action가 된다

                App Button
              </button>

              <Children />
            </div>
          );
        }

    2. CSS 모듈에서 사용하기
    = CSS 모듈에서 'Classnames' 라이브러리를 사용할 때는 'Classnames/bind' 패키지를 활용
    = 해당 패키지가 제공하는 'bind()' 함수를 사용해 CSS 모듈 객체를 Classnames 함수에 전달한다
      bind() 함수 : CSS 모듈 객체와 Classnames 함수를 연결하는 역할을 한다
    = 여기서 'CSS 모듈 객체'란 'module.css' 확장자를 가진 CSS 파일을 컴포넌트에서 import할 때 생성되는 객체
    = 'bind(객체명)'과 같이 사용하면 객체 접근 없이 문자열 키만으로 클래스 이름을 동적으로 조합할 수 있다
      ex)
        import styles from './style.module.css';
        import classNames from 'classnames/bind';
        - 'classnames/bind' 패키지에서 'classnames' 함수를 import한다

        import Children from './Children';

        export default function Classnames() {
          const isActive = true;

          const cx = classNames.bind(styles);
          - 'bind()' 함수를 사용해 CSS 모듈 객체(styles)와 연결한다 
          - 이렇게 하면 객체 속성에 접근하지 않고도 'cx('클래스 명)'처럼 간단하게 문자열로 스타일을 사용할 수 있다

          return (
            <div>
              <button className={cx({btn : true, 'is-active': isActive })}>
              - 'btn'이 true이므로 btn 클래스는 항상 적용 되고 'is-active' 클래스는 'isActive'가 ture일 때만 함께 추가된다

                App Button
              </button>
              <Children />
            </div>
          ); 
        }

    <설치 방법>
    -> npm i classnames -> 'package.js'에서 'dependencies'에서 "classnames : "2.5.1""있는지 확인

*/
