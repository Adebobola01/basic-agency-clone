import React from "react";
import styles from "./index.module.scss";
import VideoPlayer from "../../videoPlayer";

type caseType = {
    title: string,
    text: string,
    image?: any
    video?: any
}



const Case = (props: caseType)=> {

    return(
        <div className={styles.case} >
                {
                    props.video ? 
                    <div>
                        <VideoPlayer video={props.video} mute={true} show={true} loop={true} /> 
                    </div> :
                    <div>
                        <img src={props.image} alt={props.title} />
                    </div>
                }
            <span className={`${styles.case_details} ${props.video ? styles.case_details_video : ""} `} >
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </span>
        </div>
    )
}

export default Case;