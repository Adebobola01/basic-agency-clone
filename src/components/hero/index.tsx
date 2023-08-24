import React from "react";
import { useState } from "react";
import heroVid from "../../assets/images/4c749533161fc77c899a376ec6cd6da38973772f.mp4";
import heroGif from "../../assets/images/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4";
import styles from "./index.module.scss";
import VideoPlayer from "../videoPlayer";
const Hero = ()=>{
    const [hero, setHero] = useState(true);
    const [muteVid, setmuteVid] = useState(true)
    const heroHandler = ()=>{
        setHero(!hero);
        setTimeout(()=>{
            setmuteVid(false);
        }, 1)
    }


    return (
        <section className={styles.hero} >
            <div className={styles.cover} onClick={heroHandler} ></div>
            <VideoPlayer mute={muteVid} video={heroVid} loop={false} show={!hero} />
            <VideoPlayer video={heroGif} mute={true} show={hero} loop={true} />
        </section>
    )
}
export default Hero;