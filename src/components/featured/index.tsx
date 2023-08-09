import React from "react";
import styles from "./index.module.scss";
import Underline from "../underline";
import EngagamentItem from "./engagementItem";
import image from "../../assets/images/gal2.png";

const Featured = ()=>{

    return(
        <section className={styles.featured} >
            <Underline/>
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
                <EngagamentItem imageLink={image} title="google" text="Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership " />
                <EngagamentItem imageLink={image} title="google" text="Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership " />
                <EngagamentItem imageLink={image} title="google" text="Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership " />
                <EngagamentItem imageLink={image} title="google" text="Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership " />
                <EngagamentItem imageLink={image} title="google" text="Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership " />
            </div>
        </section>
    )
}
export default Featured;