import React from "react";
import styles from "./index.module.scss";
import { TransparentBtn } from "../buttons";
import VideoPlayer from "../videoPlayer";
import spotVid from "../../assets/images/Culture-Loop_v1.mp4";
const Spotlight = ()=>{
    return (
        <section className={styles.spotlight} >
            <div className={styles.spotlight_texts} >
                <h2>BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</h2>
                <p>ADWEEK 
                    {/* <!--   --> */}
                    <span> AGENCY SPOTLIGHT</span>
                </p>
                <br/>
                <TransparentBtn text="ABOUT US" />
            </div>
            {/* <figure className={styles.spotlight_video} > 
                <VideoPlayer video={spotVid} mute={true} />
            </figure> */}
        </section>
    )
}

export default Spotlight;