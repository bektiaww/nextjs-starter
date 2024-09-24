"use client"
import { createContext, CSSProperties, ReactNode, useContext, useEffect, useRef } from "react"
import { Button } from "../button/button"
import { useDisclosure } from "@/hooks/useDisclosure"
import styles from './styles.module.css'
import Close from "../icons/Close"
import { IconButton } from "../button/iconButton/iconButton"

type ModalSize = "sm" | "md" | "lg" | "xl"
const ModalContext = createContext<{isOpen:boolean, close:()=>void}>({isOpen:false, close:()=>{}});

export const Modal = ({isOpen, close, size, children}:{isOpen:boolean, close:()=>void, size?:ModalSize, children:ReactNode})=> {
    const value = {isOpen:isOpen, close:close}
    const ref = useRef<HTMLDialogElement>(null)    
    const width = size==="xl" ? "1140px"
        : size ==="lg" ? "800px"
        : size ==="md" ? "500px"
        : size ==="sm" ? "300px"
        : "500px" //default size

    useEffect(()=>{
        isOpen ? ref.current?.showModal()
            :ref.current?.close()
    },[isOpen])

    return (
        <ModalContext.Provider value={value}>
            <dialog ref={ref} 
                style={{
                    "--modal-width":width
                } as CSSProperties} 
                className={styles.modal}>
            {children}</dialog>
        </ModalContext.Provider>
    )
}

export const ModalHeader = ({children}:{children:ReactNode})=>{
    const {close} = useContext(ModalContext);

    return(
        <div className={styles.header}>
            <h3>{children}</h3>
            <button onClick={close} className={styles.closeButton}><Close/></button>
        </div>
    )
}

export const ModalBody = ({children}:{children:ReactNode})=>{
    return(
        <div className={styles.body}>{children}</div>
    )
}

export const ModalFooter = ({children}:{children:ReactNode})=>{
    return(
        <div className={styles.footer}>{children}</div>
    )
}

export const MyModalExample = ()=>{
    const {isOpen, open, close} = useDisclosure()

    return(
        <>        
        <Button onClick={open}>open</Button>
        <Modal isOpen={isOpen} close={close}>
            <ModalHeader>Hello world</ModalHeader>
            <ModalBody>
                <p>hello dunia, selamat pagi!</p>
            </ModalBody>
            <ModalFooter>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
            </ModalFooter>
        </Modal>
        </>
    )
}