import React from "react";
import NavigationItem from "./navigationItem";
import styles from "./index.module.scss";

const NavigationItems = ()=>{

    return(
        <nav className={styles.nav} >
            <NavigationItem navLink="WORK" />
            <NavigationItem navLink="ABOUT" />
            <NavigationItem navLink="NEWS" />
            <NavigationItem navLink="THINKING" />
            <NavigationItem navLink="CAREERS" />
            <NavigationItem navLink="CONTACT" />
        </nav>

    )
}
export default NavigationItems;