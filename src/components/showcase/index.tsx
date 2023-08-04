import React from "react";
import Case from "./case";
import noise from "../../assets/images/gal2.png";
import firstImage from "../../assets/images/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.webp";
import secondImage from "../../assets/images/f1931ee572cd014ca5c3b5fe7e6054cfc0583624-720x900.webp";
import thirdImage from "../../assets/images/9dc5a490bd877e8685f2089209db192188dd21e7.mp4";

import styles from "./index.module.scss";

const ShowCase = ()=>{

    return(
        <section className={styles.showcase} >
            <Case title="patagonia" text="an ecommerce experience driven by patagonia's brand mission" image={firstImage} />
            <Case title="wilson" text="a century-old sports brand finding its place in culture" image={secondImage} />
            <Case title="google store" text="an ecommerce experience helping google bring its hardware to people across the globe" video={thirdImage} />
        </section>
    )
}
export default ShowCase;