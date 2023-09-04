// import React from "react";
import styles from "./index.module.scss";


type colType = {
    title: string,
    links: Array<string>,

}

const Col = (props:colType)=>{
    const linkContent = props.links.map((it, idx) => <li key={idx} >{it}</li>)

    return(
        <div className={styles.col} >
            <h6>{props.title}</h6>
            <ul>
                {linkContent}
            </ul>
        </div>
    )
}

export default Col;