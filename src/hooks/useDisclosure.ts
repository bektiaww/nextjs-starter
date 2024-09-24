import { useState } from "react"

export const useDisclosure = ()=>{
    const [isOpen, setIsOpen] = useState(false) 
    const open = ()=>{
        setIsOpen(()=>true)
    }
    const close = ()=>{
        setIsOpen(()=>false)
    }
    const toggle = ()=>{
        setIsOpen((prevState)=>!prevState)
    }
    return({
        isOpen:isOpen,
        close:close,
        open:open,
        toggle:toggle
    })
}