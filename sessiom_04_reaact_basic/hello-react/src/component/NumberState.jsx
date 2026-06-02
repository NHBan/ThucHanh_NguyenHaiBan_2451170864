
import { useState } from "react";
function NumberState ()
{
const[count,setCount]=useState(0)
return(
    <>
    <h2>Bo dem</h2>
    <p
    style={{color:count>0?'green':count<0?'red':'black'}}
    >So hien tai {count}</p>
    <button onClick={()=>setCount(count+5)}>
        Cong 5
    </button>
    <p>So hien tai la so: {count>0?'So duong':'so am'}</p>
    </>
)
}