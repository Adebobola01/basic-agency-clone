import React, {useRef} from "react";
import styles from "./index.module.scss";

type videoType = {
    mute: boolean,
    video: any,
    loop?: boolean,
    show?: boolean,
    pause?: boolean,
}

const VideoPlayer = (props: videoType)=>{
    const vidRef = useRef();

    if(!props.show){
        vidRef.current?.pause();
    }else{
        vidRef.current?.play();
    }


    const style = {
        display: props.show ? "block" : "none"
    }

    return (
        <video autoPlay controls={false} playsInline muted={props.mute}  loop={props.loop} ref={vidRef} className={styles.videoPlayer} style={style} >
            <source src={props.video} type="video/mp4" />
        </video>
    )
}

export default VideoPlayer;