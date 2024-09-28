'use client'
import { useDisclosure } from "@/hooks/useDisclosure"
import { createContext, ReactNode, useContext, useEffect, useRef } from "react"
import styles from "./styles.module.css"
import CloseIcon from "../Icons/CloseIcon"
import { Button } from "../Button/Button"

const DrawerContext = createContext({isOpen:false, close:()=>{}})
export const Drawer = ({isOpen, close, children}:{isOpen:boolean, close:()=>void, children:ReactNode})=>{
    const value = {isOpen:isOpen, close:close}
    const ref = useRef<HTMLDialogElement>(null)

    useEffect(()=>{
        if(isOpen){
            ref.current?.show();
        } else {
            ref.current?.classList.add(styles["drawer-onclose"])
        };

        return ()=>ref.current?.classList.remove(styles["drawer-onclose"])
    },[isOpen])

    useEffect(()=>{
        const listener = ()=> {
            ref.current?.addEventListener("transitionend", ()=>{
                if(isOpen){

                }else{
                    ref.current?.close();
                }
            })
        }
        listener();
        return ()=>removeEventListener("transitionend", listener)
    },[])

    return(
        <DrawerContext.Provider value={value}>
            <dialog className={styles["drawer"]} ref={ref}><div className={styles["drawer__container"]}>{children}</div></dialog>
        </DrawerContext.Provider>
    )
}

export const DrawerHeader = ({children}:{children?:ReactNode})=>{
    const {close} = useContext(DrawerContext);
    return(
        <div className={styles["drawer__header"]}>
            {children}
            <button onClick={close} className={styles["drawer__close-icon"]}><CloseIcon size={1.5}/></button>
        </div>
    )
}

export const DrawerBody = ({children}:{children?:ReactNode})=>{
    return(
        <div>{children}</div>
    )
}

export const DrawerFooter = ({children}:{children:ReactNode})=>{
    return(
        <div>{children}</div>
    )
}


export const DrawerExample = ()=>{
    const {isOpen, toggle, close} = useDisclosure()
    return(
        <>
        <Button onClick={toggle}>Open Drawer</Button>
        <Drawer isOpen={isOpen} close={close}>
            <DrawerHeader>
                <h3>Drawer Open</h3>
            </DrawerHeader>
            <DrawerBody>
                <Button>Link</Button>
            </DrawerBody>
            <DrawerFooter>
                <Button>Log in</Button>
            </DrawerFooter>
        </Drawer>
        </>
    )
}
