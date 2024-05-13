import { MouseEventHandler, ReactNode } from "react"
import styles from "./Button.module.sass"

type ButtonProps = Readonly<{
    children: ReactNode,
    className?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
}>

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className={`${styles["button"]} ${props.className}`}>
            <span className="">
                <span className={styles["button__content"]}>{props.children}</span>
            </span>
        </button>

    )
}