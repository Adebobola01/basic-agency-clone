import React from "react";
import { useState } from "react";
import heroVid from "../../assets/images/4c749533161fc77c899a376ec6cd6da38973772f.mp4";
import heroGif from "../../assets/images/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4";
import styles from "./index.module.scss";
import VideoPlayer from "../videoPlayer";
const Hero = ()=>{
    const [hero, setHero] = useState(false);

    const heroHandler = ()=>{
        setHero(!hero);
        console.log(hero)
    }


    let content = (hero ? <VideoPlayer mute={false} video={heroVid}/>
        : <VideoPlayer video={heroGif} mute={true} />)


    return (
        <section className={styles.hero} >
            <div className={styles.cover} onClick={heroHandler} ></div>
            {content}
        </section>
    )
}
export default Hero;