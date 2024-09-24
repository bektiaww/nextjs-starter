import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from './styles.module.css'

export const IconButton = ({icon, ...rest}:ButtonHTMLAttributes<HTMLButtonElement> & {icon:ReactNode})=>{
    return(
        <button className={styles.button} {...rest}>
            {icon}
        </button>
    )
}