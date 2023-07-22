import React from "react";
import heroVid from "../../assets/images/4c749533161fc77c899a376ec6cd6da38973772f.mp4"
import styles from "./index.module.scss";
const Hero = ()=>{

    return (
        <section className={styles.hero} >
            <video autoPlay={true} controls>
                <source src={heroVid} type="video/mp4" />
            </video>
        </section>
    )
}
export default Hero;