import React from "react";
import { useState, useEffect } from "react";
import heroVid from "../../assets/images/4c749533161fc77c899a376ec6cd6da38973772f.mp4";
import heroGif from "../../assets/images/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4";
import styles from "./index.module.scss";
import VideoPlayer from "../videoPlayer";



type cursorPtType = {
    clientX: number, 
    clientY: number
}


const Hero = ()=>{
    const [playHeroGif, setPlayHeroGif] = useState(true);
    const [muteVid, setmuteVid] = useState(true);
    const [clientX, setCursorX] = useState(600)
    const [clientY, setCursorY] = useState(370)
    const [cursorStyle, setCursorStyle] = useState({});
    
    const heroHandler = ()=>{
        setPlayHeroGif(!playHeroGif);
        setTimeout(()=>{
            setmuteVid(!muteVid);
        }, 1)
    }

    const moveMouse = ({clientX, clientY}: cursorPtType)=>{
        setCursorX(clientX);
        setCursorY(clientY);
    }

    const cursorStyleHandler = ({clientX, clientY}: cursorPtType)=>{
        setCursorStyle({
            transform: `translate(${clientX}px, ${clientY}px)`,
        });
    }

    useEffect(()=>{
        cursorStyleHandler({clientX, clientY});
        // return cursorStyleHandler({clientX: 600, clientY: 370});
    }, [clientX, clientY])


    return (
        <section className={styles.hero} onMouseMove={moveMouse} >

            <div className={styles.cursor} style={{...cursorStyle, display: playHeroGif ? "flex" : "none"}} >
                <div className={styles.cursor_top} >
                    <p>watch <br/> 
                    reel</p>
                </div>
                <div className={styles.cursor_down} >
                    <p>BASIC/DEPT®</p>
                    <p>2010-*</p>
                </div>
            </div>

            <div className={styles.cover} onClick={heroHandler}></div>
            <VideoPlayer mute={muteVid} video={heroVid} loop={false} show={!playHeroGif} />
            <VideoPlayer video={heroGif} mute={true} show={playHeroGif} loop={true} />
        </section>
    )
}
export default Hero;