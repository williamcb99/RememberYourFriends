import styles from "./Logo.module.sass"
import { LogoSVG } from "../../assets/LogoSVG";

type LogoProps = Readonly<{
    Height: number,
    Width: number,
    Children: string
}>;

export const Logo = (props: LogoProps) => {
    return (
        <div className={`${styles["logo__container"]}`}>
            <LogoSVG {...props}/>
        </div>
    );
};