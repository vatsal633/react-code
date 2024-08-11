import './App.css'
import {useState} from "react"
import Navbar from "./components/nav.jsx"
import Footer from "./components/foooter.jsx"

export default function App() {
const [value,setvalue] = useState(0)
  return (
      <div className='app'>
        <Navbar logotext="vatsal munjpara"/>
        <div className='container'>
        {value}
        <button onClick={()=>{
          setvalue(value+1)
        }}>
        Click 
        </button>
      </div>
      <Footer/>
    </div>
  )
}
