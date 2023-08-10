import React from "react";
import styles from "./index.module.scss";

type itemType = {
    imageLink: string,
    title: string,
    text: string
}


const EngagamentItem = ({imageLink, title, text}: itemType)=>{


    return (
        <div className={styles.engagementItem} >
            <img src={imageLink} alt={`${title} logo`} />

            <p>
                <h4>{title}</h4>

                {text}
            </p>
        </div>
    )
}

export default EngagamentItem;
