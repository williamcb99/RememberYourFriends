import styles from "./Logo.module.sass"
import { LogoSVG } from "../../assets/LogoSVG";


export const Logo = () => {
    return (
        <div className={`${styles["logo"]}`}>
            <div className={`${styles["logo__svg"]}`}>
                <LogoSVG/>
            </div>
        </div>
    );
};