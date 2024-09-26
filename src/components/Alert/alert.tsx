import { CSSProperties, ReactNode } from 'react'
import styles from './styles.module.css'

type AlertStatus = "success" | "warning" | "error" |"info"
type AlertVariant = "fill" | "outline" | "ghost"

export const Alert = ({status, variant, children}:{status:AlertStatus, variant?:AlertVariant, children:ReactNode})=>{
    return(
        <div style={{
                "--clr-alert":`var(--clr-${status}-900)`,
                "--clr-alert-secondary":`var(--clr-${status}-700)`
            } as CSSProperties} 
            className={`${styles.alert} 
                ${(variant==="fill" || variant===undefined) && styles.alertFill}
                ${variant==="outline" && styles.alertOutline}
                ${variant==="ghost" && styles.alertGhost}
            `}>
        {children}</div>
    )
}

export const AlertMessage = ({children}:{children:ReactNode})=>{
    return(
        <div>{children}</div>
    )
}
