import styles from "./Card.module.sass"
import { Button } from "../Button/Button"

type CardProps = Readonly<{
    Title: string,
    Category: string
    ImageURL: string
    ImageAltText: string
}>

export const Card = (props: CardProps) => {
    return (
        <div className={`${styles["card"]}`}>
            <div className={`${styles["card__head"]}`}>
                <img className={`${styles["card__img"]}`} src={props.ImageURL} alt={props.ImageAltText}/>
            </div>
            <div className={`${styles["card__body"]}`}>
                <div className={`${styles["card__title"]}`}>{props.Title}</div>
                <div className={`${styles["card__category"]}`}>{props.Category}</div>
                <Button className="button__small">Learn More</Button>
            </div>
        </div>
    )
}