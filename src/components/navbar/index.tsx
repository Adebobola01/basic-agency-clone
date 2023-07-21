import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../logo";
import NavigationItems from "../navigationItems";
import {ToggleBtn} from "../buttons/index";

const Navbar = ()=>{

    return(
        <header className={styles.header} >
            <Logo />
            <NavigationItems/>
            <ToggleBtn/>
        </header>
    )
}

export default Navbar;