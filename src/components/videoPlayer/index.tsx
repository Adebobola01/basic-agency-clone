import React from "react";
import styles from "./index.module.scss";

type videoType = {
    mute: boolean,
    video: any,
    loop?: boolean,
    show?: boolean 
}

const VideoPlayer = (props: videoType)=>{

    const style = {
        display: props.show ? "block" : "none"
    }

    return (
        <video autoPlay controls={true} playsInline muted={props.mute} loop={props.loop} className={styles.videoPlayer} style={style} >
            <source src={props.video} type="video/mp4" />
        </video>
    )
}

export default VideoPlayer;