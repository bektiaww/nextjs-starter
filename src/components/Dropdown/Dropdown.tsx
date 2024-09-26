'use client'
import { useDisclosure } from "@/hooks/useDisclosure"
import { ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactElement, useRef } from "react"
import styles from './styles.module.css'
import { Button, ButtonProps } from "../Button/Button"
import { LeftIcon, RightIcon, UpIcon, DownIcon } from "../Icons/ChevronIcon"


export const DropdownExample =()=>{
    return(
        <Dropdown show="bottom" label="menu" icon="left" variant="outline">
            <DropdownList onClick={()=>console.log("hello")}>Home</DropdownList>
            <DropdownList onClick={()=>console.log("hello")}>About</DropdownList>
            <DropdownList onClick={()=>console.log("hello")}>Project</DropdownList>
            <DropdownList onClick={()=>console.log("hello")}>Contact</DropdownList>
        </Dropdown>
    )
}

type DropdownsProps = Pick<ButtonProps, "color"|"variant"|"size"> & {
    show?:"bottom"|"right"|"left"|"top",
    icon?:"right"|"left",
    children:Array<ReactElement> | ReactElement,
    label:string,
}

export const Dropdown = ({show, children, label, icon, ...btnProps}:DropdownsProps)=>{
    const {isOpen, toggle} = useDisclosure()
    const ref = useRef<HTMLDivElement>(null)

    const addIcon = icon==="left" ? {leftIcon: show==="top" ? <UpIcon/> : show==="left" ? <LeftIcon/>: show==="right" ? <RightIcon/>:<DownIcon/>}
        : icon==="right" ? {rightIcon: show==="top" ? <UpIcon/> : show==="left" ? <LeftIcon/>: show==="right" ? <RightIcon/>:<DownIcon/>}
        : {}

    return(
        <div className={styles["dropdown"]} ref={ref}>
            <Button onClick={()=>toggle()} {...addIcon} {...btnProps}>{label}</Button>
            {isOpen && 
                <div      
                    style={{
                        "--width":`${ref.current?.clientWidth}px`,
                        "--height":`${ref.current?.clientHeight}px`
                    } as CSSProperties}

                    className={`
                        ${styles[`dropdown-list-container`]} 
                        ${(show==="bottom" || show===undefined) && styles['dropdown-list-container-bottom']}
                        ${show==="top" && styles['dropdown-list-container-top']}
                        ${show==="left" && styles['dropdown-list-container-left']}
                        ${show==="right" && styles['dropdown-list-container-right']}
                    `} 
                >{children}</div>
            }
        </div>
    )
}

export const DropdownList = ({onClick, children}
        :{
            onClick:ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
            children:ButtonHTMLAttributes<HTMLButtonElement>["children"]
        }
    )=>{    
    return(
        <button className={styles["dropdown-list"]} onClick={onClick}>{children}</button>
    )
}