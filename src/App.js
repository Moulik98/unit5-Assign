
import './App.css';
import "./components/Button"
import{ Button } from './components/Button';
import { useState } from 'react';

function App() {
  const [theme,setThem] = useState("dark")
  const [color,setcolor] = useState("white")
  const [border,setBorder] = useState("solid")
  return (
    <div className="App">
      
   <Button theme={theme} color={color}>Primary Button</Button>
   <Button border={border}>Default</Button>
   <Button border={"dashed"} >Dashed Button</Button>
   <Button theme={"text"}>Text Button</Button>
   <Button color={"link"}>Link Button</Button>
      
       
    </div>
  );
}

export default App;