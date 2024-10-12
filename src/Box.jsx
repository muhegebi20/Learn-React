import { useState } from "react"
import "./Box.css"
export default function Box({color, allcolors}) {
    let [col, setCol] = useState(color);
    let changeColor = ()=>{

        setCol(allcolors[Math.floor(Math.random()*25)].color)
    }
    let style = {
        margin:0, 
        padding:0,
        backgroundColor: col,
    }
  return (
    <div onClick={changeColor} style={style}></div>
  )
}
