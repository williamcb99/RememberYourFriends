import styles from "./NavBar.module.sass"

type NavBarProps = Readonly<{
    Text1: string,
    Link1: string,
    Text2: string,
    Link2: string,
    Text3: string,
    Link3: string,
    Text4: string,
    Link4: string,
}>

export const NavBar = (props: NavBarProps) => {
    return (
        <div className={`${styles["NavBar"]}`}>
            <a href={props.Link1}>{props.Text1}</a>
            <a href={props.Link2}>{props.Text2}</a>
            <a href={props.Link3}>{props.Text3}</a>
            <a href={props.Link4}>{props.Text4}</a>
        </div>
    );
};