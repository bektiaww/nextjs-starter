import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react"
import styles from './styles.module.css'

export const Button = ({variant, color, leftIcon, rightIcon, ...rest}
    :ButtonHTMLAttributes<HTMLButtonElement> & {
        variant?:"solid" | "outline" | "ghost" | "link",
        color?: string
        leftIcon?:ReactNode
        rightIcon?:ReactNode
    })=>{
    return(
        <button {...rest}
            // adding css variable
            style={color!==undefined ? {
                "--clr-dark": `var(--clr-${color}-950)`,
                "--clr-dark-less": `var(--clr-${color}-900)`,
                "--clr-light": `var(--clr-${color}-100)`,
                "--clr-light-less": `var(--clr-${color}-200)`,
            } as CSSProperties :{
                "--clr-dark":"var(--clr-first-950)",
                "--clr-dark-less":"var(--clr-first-900)",
                "--clr-light":"var(--clr-first-100)",
                "--clr-light-less":"var(--clr-first-200)",            
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