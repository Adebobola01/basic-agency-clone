import React from "react";
import styles from "./index.module.scss";

type caseType = {
    title: string,
    text: string,
    image: any
}



const Case = (props: caseType)=> {

    return(
        <div className={styles.case} >
            <picture>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 900"></svg>
                {/* <img src={props.image} alt={props.title} /> */}
            </picture>
            <span className={styles.case_details} >
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </span>
        </div>
    )
}

export default Case;