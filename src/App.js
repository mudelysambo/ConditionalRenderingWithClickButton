import User from "./User";
import {useState} from 'react'

export default function App() {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div className="App">
      <button onClick={()=> setIsToggled(!isToggled) }>Toogle</button>
      {isToggled && <User/>}
      {isToggled ? <User/> : <p>The value is false</p>}

      {/* <User/> */}
    </div>
  );
}
