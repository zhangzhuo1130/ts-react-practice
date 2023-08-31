import React ,{useState}from 'react';
import './assets/css/App.css';

// type TitleProps={
//   name:string
// }
interface TitleProps{
  name:string
}
interface TitleProps{
  desc?:string
}

const Title:React.FC<TitleProps>=({name,desc})=>{
  // if(desc===undefined) return
  return <p>{name}</p>
}

const App:React.FC=()=> {
  // 用泛型的写法<number|string>将当前 state可传三种类型的内容
  const [title,setTitle] = useState<number|string>();
  return (
    <div className="App">
      <Title name={'Title'}/>
    </div>
  );
}

export default App;
