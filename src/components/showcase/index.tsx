import React from "react";
import Case from "./case";
import noise from "../../assets/images/gal2.png";
import styles from "./index.module.scss";

const ShowCase = ()=>{

    return(
        <section className={styles.showcase} >
            <Case title="patagonia" text="an ecommerce experience driven by patagonia's brand mission" image={noise} />
            <Case title="wilson" text="a century-old sports brand finding its place in culture" image={noise} />
            <Case title="google store" text="an ecommerce experience helping google bring its hardware to people across the globe" image={noise} />
        </section>
    )
}
export default ShowCase;