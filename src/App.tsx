import { useState , useEffect} from "react";
import "./App.css";

 
interface Props {
  name: string;
  lastname: string;
}

const Person = ({ name, lastname }: Props) => {
  return (
    <div>
      <h1>
        Hello {name} {lastname} please solve this: 
      </h1>
    
    </div>
  );
};
interface Props2{
  symbol:string 
  onclick() :void;
}
const Calculator = ({symbol,onclick}: Props2) =>{
    return(
      <div>
         
        
      </div>
    )

}

function App() {
 
  const [count,setCount] = useState(0);
  useEffect( () => {
    setCount(100);                  
    },[ ]);
  return (
    <div>
      <Person name="Tony" lastname="Benardis"  />
       
      <button type="button" className ="btn btn-primary" onClick={() =>setCount(count+1)}>+</button><div></div> 
      <h1>{count}</h1>
      <button type="button" className ="btn btn-danger" onClick={() =>setCount(count-1)}>-</button><div></div> 

     </div>
  );
}

export default App;
