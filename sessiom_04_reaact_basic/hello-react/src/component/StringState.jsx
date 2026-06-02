import { useState } from "react";
function StringState()
{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const[showPass,setShowPass]=useState(true)
    return
    (
        <>
        <form action="">
            <p>So luong tu ban da nhap la {name.length}/100</p>
            <input type="text"
            required
            onChange={(e)=>setName(e.target.value)}
            placeholder="Vui long nhap ten"
            maxLength={100}
            />
            <input type="email"
            required
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Vui long nhap email cua ban" />
            <input 
            type={showPass?"text":"password"} name="" id=""
            minLength={8}
            onChange={(e)=>setPass(e.target.value)}
            required
            />
        </form>
        </>
    )
}