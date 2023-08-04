import React from "react";
import styles from "./index.module.scss";

const VideoPlayer = (props: any)=>{

    return (
        <video autoPlay controls={true} playsInline muted={props.mute} loop={true} className={styles.videoPlayer} onClick={props.handler} >
            <source src={props.video} type="video/mp4" />
        </video>
    )
}

export default VideoPlayer;