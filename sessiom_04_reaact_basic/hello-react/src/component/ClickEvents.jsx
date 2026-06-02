import { useState } from "react";
function ClickEvents()
{
    const [bgColor,setBgColor]=useState('#f4f4f4')
    const[count,setCount]=useState(0)
    function handlChangeColor()
    {
        const ramdomColor=Math.floor(Math.random()*16777215).toString(16).padStart(6,'0')
        setBgColor(ramdomColor)
    }
    return(
        <>
        <div style={{backgroundColor:bgColor}}>
            <p>Lorem*4</p>
            <p>Lorem*4</p>
            <p>Lorem*4</p>
            <button onClick={handlChangeColor}>Doi mau ngau nhien</button>
        </div>
        <div>
            <p>So lan bam button la {count}</p>
            <button onClick={()=>setCount(count+1)}></button>
        </div>
        </>
    )
}