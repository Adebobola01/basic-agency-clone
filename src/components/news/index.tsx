// import React from "react";
import styles from "./index.module.scss";
import { TransparentBtn } from "../buttons";
import NewsItem from "./news-item";
import img from "../../assets/images/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.webp"

const News = ()=> {


    return (
        <section className={styles.News} >
            <div className={styles.News_header} >
                <h2>featured  <br/> news</h2>
                <TransparentBtn text="view all" />
            </div>  
            <div className={styles.News_body}>
                <NewsItem text="the roadmap for auto brands" date="6.16.23" image={img} />
                <NewsItem text="breaking through the branding blahs" date="6.16.23" image={img} />
                <NewsItem text='ryan parkhurst moderates talk on "the art and science of brand purpose and creativity"' date="6.16.23" image={img} />
                <NewsItem text="john waters, bare walls, and sparking creativity" date="6.16.23" image={img} />
                <NewsItem text="BASIC/DEPT® is the 27th Webby Awards: Agency of the Year" date="6.16.23" image={img} />
                <NewsItem text="BASIC/DEPT® secures 19 Nominations for the 27th Annual Webby Awards" date="6.16.23" image={img} />
                <NewsItem text="Women’s History Month Spotlight at B/D®" date="6.16.23" image={img} />

            </div>
        </section>
    )
};

export default News;