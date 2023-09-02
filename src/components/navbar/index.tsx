import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../logo";
import NavigationItems from "../navigationItems";
import {ToggleBtn} from "../buttons/index";

const Navbar = ()=>{

    return(
        <header className={styles.header} >
            <Logo fillSvg="#fff" />
            <NavigationItems/>
            <ToggleBtn/>
            <p className={styles.menu_btn} >menu</p>
        </header>
    )
}

export default Navbar;