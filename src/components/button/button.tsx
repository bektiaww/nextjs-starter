import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react"
import styles from './styles.module.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?:"fill" | "outline" | "ghost" | "link",
    color?: string
    leftIcon?:ReactNode
    rightIcon?:ReactNode
    size?:string
}

export const Button = ({variant, color, leftIcon, rightIcon, size, ...rest}:ButtonProps)=>{
    return(
        <button {...rest}
            style={{
                "--font-size": size? `${size}rem`:"1rem",
                "--clr-dark": color? `var(--clr-${color}-950)`:"var(--clr-primary-950)",
                "--clr-dark-hover": color? `var(--clr-${color}-800)`:"var(--clr-primary-800)",
                "--clr-light": color? `var(--clr-${color}-100)`:"var(--clr-primary-100)",
                "--clr-light-hover": color? `var(--clr-${color}-200)`:"var(--clr-primary-200)",
            } as CSSProperties }
            //className based on variant
            className={`
                    ${styles.base}
                    ${(variant==="fill" || variant===undefined) && styles.fill}
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