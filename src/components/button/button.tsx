import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react"
import styles from './styles.module.css'

export type ButtonProps = {
    //Button default attributes
    children? : ButtonHTMLAttributes<HTMLButtonElement>["children"],
    onClick? : ButtonHTMLAttributes<HTMLButtonElement>["onClick"],
    // variant
    variant?:"fill" | "outline" | "ghost" | "link",
    color?: string,
    leftIcon?:ReactNode,
    rightIcon?:ReactNode,
    fontSize?:string,
    // to control positon
    marginLeft?:string,
    marginRight?:string,
    marginBottom?:string,
    marginTop?:string,
}

export const Button = ({
    variant,
    color, 
    leftIcon, 
    rightIcon, 
    fontSize,
    marginLeft,
    marginRight, 
    marginTop,
    marginBottom,
    onClick,
    children }:ButtonProps)=>{
    return(
        <button
            style={{
                "--btn-font-size": fontSize? fontSize:"1rem",
                "--clr-dark": color? `var(--clr-${color}-950)`:"var(--clr-primary-950)",
                "--clr-dark-hover": color? `var(--clr-${color}-800)`:"var(--clr-primary-800)",
                "--clr-light": color? `var(--clr-${color}-100)`:"var(--clr-primary-100)",
                "--clr-light-hover": color? `var(--clr-${color}-200)`:"var(--clr-primary-200)",
                // positioning
                "--btn-margin-left" : marginLeft? marginLeft : 0,
                "--btn-margin-right" : marginRight? marginRight : 0,
                "--btn-margin-bottom" : marginBottom? marginBottom : 0,
                "--btn-margin-top" : marginTop? marginTop : 0,
            } as CSSProperties }
            //className based on variant
            className={`
                    ${styles.base}
                    ${(variant==="fill" || variant===undefined) && styles.fill}
                    ${variant==="outline" && styles.outline}
                    ${variant==="ghost" && styles.ghost}
                `}
            onClick={onClick}
            >
                {leftIcon!==undefined && leftIcon}
                {children}
                {rightIcon!==undefined && rightIcon}
            </button>
    )
}