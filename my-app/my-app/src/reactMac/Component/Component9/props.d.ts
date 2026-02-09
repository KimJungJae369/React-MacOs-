// interface UserProps {
//   UserObj: {
//     name: string;
//     age: string;
//   };
//   clickHandler: () => void;
// }


interface UserProps{
  Obj : {
    name : string,
    age : number,
    body : string,
  },
  Handler : () => void;
}