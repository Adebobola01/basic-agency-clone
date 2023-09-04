// import React from "react";
import styles from "./index.module.scss";

type navType = {
    navLink: string
}

const NavigationItem = (props: navType)=>{

    return(
        <p className={styles.navItem}>{props.navLink}</p>
    )
}
export default NavigationItem;