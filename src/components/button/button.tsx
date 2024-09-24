import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react"
import styles from './styles.module.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?:"solid" | "outline" | "ghost" | "link",
    color?: string
    leftIcon?:ReactNode
    rightIcon?:ReactNode
}
export const Button = ({variant, color, leftIcon, rightIcon, ...rest}:ButtonProps)=>{
    return(
        <button {...rest}
            // adding css variable
            style={color!==undefined ? {
                "--clr-dark": `var(--clr-${color}-950)`,
                "--clr-dark-less": `var(--clr-${color}-900)`,
                "--clr-light": `var(--clr-${color}-100)`,
                "--clr-light-less": `var(--clr-${color}-200)`,
            } as CSSProperties :{
                "--clr-dark":"var(--clr-primary-950)",
                "--clr-dark-less":"var(--clr-primary-900)",
                "--clr-light":"var(--clr-primary-100)",
                "--clr-light-less":"var(--clr-primary-200)",            
            } as CSSProperties}
            className={`
                    ${styles.base}
                    ${(variant==="solid" || variant===undefined) && styles.solid}
                    ${variant==="outline" && styles.outline}
                    ${variant==="ghost" && styles.ghost}
                `}
            >
                {leftIcon!==undefined && leftIcon}
                {rest.children}
                {rightIcon!==undefined && rightIcon}
            </button>
    )
}