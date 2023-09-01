import React, {useState, useEffect} from "react";
import styles from "./index.module.scss";
import Underline from "../underline";
import EngagamentItem from "./engagementItem";
import googleImage from "../../assets/images/google.webp";
import kfcImage from "../../assets/images/kfc.webp";
import wilsonImage from "../../assets/images/wilson.webp";
import atImage from "../../assets/images/at&t.webp";
import patagImage from "../../assets/images/patagonia.webp";

type cursorPtType = {
    clientX: number, 
    clientY: number
}


const Featured = ()=>{

    const [clientX, setCursorX] = useState(0)
    const [clientY, setCursorY] = useState(0)
    const [cursorStyle, setCursorStyle] = useState({});


    //function to set cursor coordinates
    const moveMouse = ({clientX, clientY}: cursorPtType)=>{
        setCursorX(clientX - 60);
        setCursorY(clientY + 244 + 70);
    }
 
    //function to move cursor to new coordinates
    const cursorStyleHandler = ({clientX, clientY}: cursorPtType)=>{
        setCursorStyle({
            transform: `translate(${clientX}px, ${clientY}px)`,
        });
    }

    useEffect(()=>{
        cursorStyleHandler({clientX, clientY});
        console.log(clientX, clientY)
    }, [clientX, clientY]);

    return(
        <section className={styles.featured} onMouseMove={moveMouse}>
            <div className={styles.cursor} style={cursorStyle}  >
                <span>drag</span>
            </div>
            <Underline customStyles={{margin: "0 5rem"}} />
            <div className={styles.featured_num} >
                <span>00</span>
                <div>
                    <span>/05</span>
                    <span>●</span>
                </div>
            </div>
            <h2>
                featured engagements
            </h2>
                <div className={styles.featured_engagements} >
                    <EngagamentItem imageLink={googleImage} title="google" text="Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here" />
                    <EngagamentItem imageLink={kfcImage} title="kfc" text="An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership here" />
                    <EngagamentItem imageLink={wilsonImage} title="wilson" text="A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study here" />
                    <EngagamentItem imageLink={atImage} title="at&t" text="Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services." />
                    <EngagamentItem imageLink={patagImage} title="patagonia" text="Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study" />
                </div>
        </section>
    )
}
export default Featured;