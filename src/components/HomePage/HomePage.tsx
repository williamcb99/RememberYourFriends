import { Button } from "../Button/Button"
import { Logo } from "../Logo/Logo"
import { NavBar } from "../NavBar/NavBar"
import styles from "./HomePage.module.sass"

export const HomePage = () => {
    return (
        <>
            <div className={`${styles["homepage"]}`}>
                <div className={`${styles["navbar"]}`}>
                    <NavBar Text1="Home" Text2="About" Text3="Donation" Text4="Contact us"/>
                </div>
                <div className={`${styles["logo"]}`}>
                    <Logo/>
                </div>
                <div className={`${styles["buttons"]}`}>
                    <Button>Available Cats</Button>
                    <Button className="button__ghost">Available Dogs</Button>
                </div>
            </div>
        </>
    )
}