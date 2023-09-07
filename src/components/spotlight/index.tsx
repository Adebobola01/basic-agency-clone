import {useContext, useState, useRef, useEffect} from "react";
import styles from "./index.module.scss";
import { TransparentBtn } from "../buttons";
import VideoPlayer from "../videoPlayer";
import spotVid from "../../assets/images/Culture-Loop_v1.mp4";
import { ModeContext } from "../../context/mode-context";
// import {useMediaQuery} from "react-responsive";

type eType = {
    isIntersecting: boolean
}

const Spotlight = ()=>{
    const domRef = useRef<HTMLElement>(null);
    const modeContext = useContext(ModeContext);
    const [isVisible, setVisible] =useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((e: eType) => {
                if(modeContext.changeMode ){
                    return modeContext.changeMode(e.isIntersecting);
                }
            })
        });
        observer.observe(domRef.current);
        return () => {if(domRef){ return observer.unobserve(domRef.current)}}
    }, [])


    return (
        <section className={styles.spotlight} ref={domRef} >
            <div className={styles.spotlight_texts} >
                <h2>BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</h2>
                <p>ADWEEK 
                    <span> AGENCY SPOTLIGHT</span>
                </p>
                <br/>
                <TransparentBtn text="ABOUT US" color="#f9CDCD" />
            </div>
            <figure className={styles.spotlight_video} > 
                <VideoPlayer video={spotVid} mute={true} show={true} loop={true} />
            </figure>
        </section>
    )
}

export default Spotlight;