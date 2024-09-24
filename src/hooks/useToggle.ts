import { useState } from "react"

export const useToggle = ()=>{
    const [isOn, setIsOn] = useState(false)
    return{isOn:isOn, toggle:()=>setIsOn((prevState)=>!prevState)}
}