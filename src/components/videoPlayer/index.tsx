import React from "react";
import styles from "./index.module.scss";

type videoType = {
    mute: boolean,
    video: any
}

const VideoPlayer = (props: videoType)=>{

    return (
        <video autoPlay controls={true} playsInline muted={props.mute} loop={true} className={styles.videoPlayer} >
            <source src={props.video} type="video/mp4" />
        </video>
    )
}

export default VideoPlayer;