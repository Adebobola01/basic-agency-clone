// import React from "react";
import styles from "./index.module.scss";

const ToggleBtn = ()=>{

    return(
        <figure className={styles.toggleBtn} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 5">
                <circle cx="2.5" cy="2.5" r="2.5"></circle>
                <circle cx="10.5" cy="2.5" r="2.5"></circle>
                <circle cx="18.5" cy="2.5" r="2.5"></circle>
            </svg>
        </figure>
    )
}

const TransparentBtn = (props: {text: string, color?: string})=>{
    const style = props.color ? {
        color: props.color,
        border: `1px solid ${props.color}`
    } : undefined;
    return(
        <button className={styles.transpBtn} style={style} >{props.text}</button>
    )
}

export {ToggleBtn, TransparentBtn};